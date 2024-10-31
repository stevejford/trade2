"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { UserProfile, UserRole } from "@/lib/types/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: (User & Partial<UserProfile>) | null;
  loading: boolean;
  signIn: (email: string, password: string, role?: UserRole) => Promise<void>;
  signUp: (email: string, password: string, userData: Partial<UserProfile>) => Promise<void>;
  logout: () => Promise<void>;
  signInWithGoogle: (role?: UserRole) => Promise<void>;
  checkExistingAccount: (email: string) => Promise<{ exists: boolean; roles: string[] }>;
  resetPassword: (email: string) => Promise<void>;
  switchRole: (role: UserRole) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<(User & Partial<UserProfile>) | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const redirectBasedOnRole = (role?: string) => {
    if (!role) return;
    
    if (role === "user") {
      router.push("/homeowner/dashboard");
    } else if (role === "tradesperson") {
      router.push("/tradesperson/dashboard");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data() as UserProfile;
            const enhancedUser = {
              ...firebaseUser,
              ...userData,
            };
            setUser(enhancedUser);
            redirectBasedOnRole(userData.role);
          } else {
            setUser(firebaseUser);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(firebaseUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const signIn = async (email: string, password: string, role?: UserRole) => {
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data() as UserProfile;
        redirectBasedOnRole(userData.role);
      }
    } catch (error: any) {
      console.error("Sign in error:", error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, userData: Partial<UserProfile>) => {
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create user profile in Firestore
      const userProfile = {
        ...userData,
        email: firebaseUser.email,
        createdAt: new Date().toISOString(),
      };
      
      await setDoc(doc(db, "users", firebaseUser.uid), userProfile);
      
      // Update local user state
      setUser({ ...firebaseUser, ...userProfile });
      
      // Redirect based on role
      redirectBasedOnRole(userData.role);
    } catch (error: any) {
      console.error("Sign up error:", error);
      throw error;
    }
  };

  const signInWithGoogle = async (role: UserRole = "user") => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      
      const { user: firebaseUser } = await signInWithPopup(auth, provider);
      
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      
      if (!userDoc.exists()) {
        const userProfile = {
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role,
          createdAt: new Date().toISOString(),
        };
        
        await setDoc(doc(db, "users", firebaseUser.uid), userProfile);
        setUser({ ...firebaseUser, ...userProfile });
      } else {
        const userData = userDoc.data() as UserProfile;
        setUser({ ...firebaseUser, ...userData });
        role = userData.role;
      }

      redirectBasedOnRole(role);
    } catch (error: any) {
      console.error("Google sign in error:", error);
      throw error;
    }
  };

  const checkExistingAccount = async (email: string) => {
    try {
      const userDocs = await getDoc(doc(db, "users", email));
      if (userDocs.exists()) {
        const userData = userDocs.data() as UserProfile;
        return { exists: true, roles: [userData.role] };
      }
      return { exists: false, roles: [] };
    } catch (error) {
      console.error("Error checking existing account:", error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  };

  const switchRole = async (role: UserRole) => {
    if (!user) return;

    try {
      await setDoc(doc(db, "users", user.uid), { role }, { merge: true });
      setUser({ ...user, role });
      redirectBasedOnRole(role);
    } catch (error) {
      console.error("Role switch error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error: any) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        logout,
        signInWithGoogle,
        checkExistingAccount,
        resetPassword,
        switchRole,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
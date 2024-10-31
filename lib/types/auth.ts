export type UserRole = 'user' | 'tradesperson';

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: UserRole;
  createdAt: string;
  phone?: string;
  location?: string;
  // Additional fields for tradespeople
  businessName?: string;
  trade?: string;
  abn?: string;
  insurance?: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
  };
  verified?: boolean;
}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8VLqcG1qCgSdtL0HRIrnRcntVNM9hOlc",
  authDomain: "chatbot-3265b.firebaseapp.com",
  projectId: "chatbot-3265b",
  storageBucket: "chatbot-3265b.appspot.com",
  messagingSenderId: "692757158415",
  appId: "1:692757158415:web:b6f5a314074fe4ddf9a17a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
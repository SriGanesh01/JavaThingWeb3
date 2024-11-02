
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKey,
  authDomain: import.meta.env.VITE_AuthDom,
  projectId: import.meta.env.VITE_ProjId,
  storageBucket: import.meta.env.VITE_StorageBucket,
  messagingSenderId: import.meta.env.VITE_MessagingSenderId,
  appId: import.meta.env.VITE_AppId,
  measurementId: import.meta.env.VITE_MeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
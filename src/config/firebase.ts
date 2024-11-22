// Initialize Firebase only if it hasn't been initialized yet
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZHl2AhMV5i__YIRHj0ZHmeohlj96fZVM",
  authDomain: "humanoid-robot-39fd2.firebaseapp.com",
  projectId: "humanoid-robot-39fd2",
  storageBucket: "humanoid-robot-39fd2.firebasestorage.app",
  messagingSenderId: "889753986149",
  appId: "1:889753986149:web:d1b042cd1458cf801fd28c"
};

// Initialize Firebase only if no apps exist
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
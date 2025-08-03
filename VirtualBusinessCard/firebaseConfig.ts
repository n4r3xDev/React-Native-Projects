import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDj_qrzbswjDYFgRJU-SDAeo7eRBHlQebg",
  authDomain: "rn-virtualbusinesscard-cfb9d.firebaseapp.com",
  projectId: "rn-virtualbusinesscard-cfb9d",
  storageBucket: "rn-virtualbusinesscard-cfb9d.firebasestorage.app",
  messagingSenderId: "642101976349",
  appId: "1:642101976349:web:eabeb1da9e89c79093d5f4"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };


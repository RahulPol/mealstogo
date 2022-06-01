import { getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAxL3wOvHvPjc_F6-PRXUw_5kHeSdxNW2c',
  authDomain: 'mealstogo-ae6a3.firebaseapp.com',
  projectId: 'mealstogo-ae6a3',
  storageBucket: 'mealstogo-ae6a3.appspot.com',
  messagingSenderId: '746181946432',
  appId: '1:746181946432:web:bc136b3448759512d203a5',
};

let app;

// Initialize Firebase
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export default app;

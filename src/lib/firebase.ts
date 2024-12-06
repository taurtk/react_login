import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDI8bxs7YhA68o2PbmsOkL7pn86gvdEzVU",
  authDomain: "fir-app-c6f71.firebaseapp.com",
  projectId: "fir-app-c6f71",
  storageBucket: "fir-app-c6f71.appspot.com",
  messagingSenderId: "1075050750902",
  appId: "1:1075050750902:web:YOUR_WEB_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
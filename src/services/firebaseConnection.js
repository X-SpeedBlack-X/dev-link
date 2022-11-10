import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY5BSRLLwBxMacA3xp_6GM0R4DX65m7YI",
  authDomain: "devlinks-448c6.firebaseapp.com",
  projectId: "devlinks-448c6",
  storageBucket: "devlinks-448c6.appspot.com",
  messagingSenderId: "1060021175681",
  appId: "1:1060021175681:web:b12489662c6f8fde199480",
  measurementId: "G-3LHKZWC41Z",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

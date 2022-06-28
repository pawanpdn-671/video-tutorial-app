import { initializeApp } from "firebase/app";
import {
   getFirestore,
   collection,
   addDoc,
   query,
   orderBy,
   limit,
   onSnapshot,
   setDoc,
   updateDoc,
   doc,
   serverTimestamp,
   getDocs,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAjV8mryWgnXETeZmGsCUfDnftiRdAmziQ",
   authDomain: "videotutorial-ded28.firebaseapp.com",
   databaseURL: "https://videotutorial-ded28-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "videotutorial-ded28",
   storageBucket: "videotutorial-ded28.appspot.com",
   messagingSenderId: "869638755782",
   appId: "1:869638755782:web:28883e9477d6f1d4fe8ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getChapters() {
   try {
      const chapterCol = collection(db, 'chapter');
      const chapterSnapshot = await getDocs(chapterCol);
      const chapterList = chapterSnapshot.docs.map(chap => chap.data());
      return { status: 200, chapterList };
   } catch (err) {
      console.log(err)
      return { status: 404, error: err }
   }
}

export { getChapters };
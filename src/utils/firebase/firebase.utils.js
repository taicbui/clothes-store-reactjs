import { initializeApp } from 'firebase/app';      // create an instance of firebase
import {
  getAuth,                              // Firebase Authentication JS SDK
  signInWithRedirect,                   // Sign in being redirected to another page 
  signInWithPopup,                      // Sign in with a pop up
  GoogleAuthProvider,                   // Import Google Provider
  createUserWithEmailAndPassword,       // Create user with email and password
  signInWithEmailAndPassword,           // Sign in with email and password
  signOut,                              // Sign out
  onAuthStateChanged,                   // Observer to state changed
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';     // To manipulate firestore database

const firebaseConfig = {
  apiKey: "AIzaSyDwATEHxMW00am02mknls6oWdQLXmWPeuc",
  authDomain: "shopdunk-reactjs-ver1.firebaseapp.com",
  projectId: "shopdunk-reactjs-ver1",
  storageBucket: "shopdunk-reactjs-ver1.appspot.com",
  messagingSenderId: "631316016514",
  appId: "1:631316016514:web:776f3090371772df33339b"
};

const firebaseApp = initializeApp(firebaseConfig);                       // Connect to firebase

const googleProvider = new GoogleAuthProvider();                         // instantiate the Google provider

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
  
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
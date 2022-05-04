
// 8 Steps for Firebase authentication

/*** Step 1: Basic setup for Firebase authentication & Firestore ***/  

import { initializeApp } from 'firebase/app';

// Import Firebase Authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Import Firestore
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// We will push data from 'SHOP_DATA' to Firestore
import SHOP_DATA from '../../shop-data';


// Configs to connect to the right Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyDwATEHxMW00am02mknls6oWdQLXmWPeuc",
  authDomain: "shopdunk-reactjs-ver1.firebaseapp.com",
  projectId: "shopdunk-reactjs-ver1",
  storageBucket: "shopdunk-reactjs-ver1.appspot.com",
  messagingSenderId: "631316016514",
  appId: "1:631316016514:web:776f3090371772df33339b",
};


// Initialize firebase app with the above configs
const firebaseApp = initializeApp(firebaseConfig);


// Initialize Firebase authentication to use it with every sign-in and sign-up
const auth = getAuth();

// Initialize Firestore to use it whenever we want to query the database
const db = getFirestore();


/*** End Of Basic setup for Firebase authentication & Firestore ***/ 





/*** Step 2: Setup for Google sign-in/sign-up ***/ 

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

/*** End Of Setup for Google sign-in/sign-up ***/ 


/*** Step 3: Sign up with Email & Password ***/ 
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
/*** End of Sign up with Email & Password ***/ 


/*** Step 4: Sign in with Email & Password ***/ 
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
/*** End of Sign in with Email & Password ***/ 



/*** Step 5: Sign in/ Sign up with Google Popup and Redirect ***/
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
/*** End of Sign in/ Sign up with Google Popup and Redirect ***/


/*** Step 6: Sign out ***/
export const signOutUser = async () => await signOut(auth);
/*** End of Sign out ***/


/// After step 6, we're already able to sign in and sign out. User collection has been automatically created in Firestore. And users' email and password have been automatically stored in Firestore. However, what if we want to store more data than just email and password?
/// To store more user data in Firestore than just email & password, we have to query directly to the Firestore database


/*** Step 7: Add user data to Firestore ***/
export const createUserDocumentFromAuth = async (
  userAuth,                      // user data including email, id, displayName,...
  additionalInformation = {}     // additional user data to add to the document. The default type of this is object
) => { 
  if (!userAuth) return;         // if there is no userAuth, cancel this function

  const userDocRef = doc(db, 'users', userAuth.uid);     // this is reference to a specific user collection based on givien userAuth.uid

  const userSnapshot = await getDoc(userDocRef);         // Read the user document with its reference above
  

  // If this user is new, hasn't been created before, we run this following function
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,         // spread additionalInformation object
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

/*** End of Add user data to Firestore ***/


/*** Step 8: Listen to every sign-in/sign-up/sign-out. This can be used to listen to Google sign-in, and pass a the function 'createUserDocumentFromAuth' as a callback ***/
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
/*** End of Step 8 ***/






// Add data from 'SHOP_DATA' to Firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

addCollectionAndDocuments('categories', SHOP_DATA)




// Get categories from Firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};









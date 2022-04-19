// Import the functions you need from the SDKs you need (SDKs: software development kits. In this case, the SDK is the initializeApp library)
import {initializeApp} from 'firebase/app';                                                     // import firebase 
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'  // Import classes and functions for signin
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'                            // Import classes and functions for getting and setting db documents and their data. 'doc' is to retrieve the documents. And 'getdoc' & 'setdoc' is to manipulate the data on those documents

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwATEHxMW00am02mknls6oWdQLXmWPeuc",
    authDomain: "shopdunk-reactjs-ver1.firebaseapp.com",
    projectId: "shopdunk-reactjs-ver1",
    storageBucket: "shopdunk-reactjs-ver1.appspot.com",
    messagingSenderId: "631316016514",
    appId: "1:631316016514:web:776f3090371772df33339b"
  };



  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// Google provider instance for sign-in
const provider = new GoogleAuthProvider(); 
provider.setCustomParameters({
    prompt: "select_account"
})

// Set up sign-in with Google Popup
export const auth = getAuth();   
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


// Set up database 
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);                         // first argument is the database firestore, the second is the name of the collection and the third is the identifier
  const userSnapshot = await getDoc(userDocRef);                             // create an instance of the user document

  // If user data doesn't exist, create/set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {                         
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //If user data exists, return userDocRef
  return userDocRef;

}
import { createContext, useState, useEffect } from 'react';

// Import firebase utils
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// Create context and set the default values
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});



export const UserProvider = ({ children }) => {
  // User states for current user
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // On mount, we will listen to any sign-in/sign-up
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
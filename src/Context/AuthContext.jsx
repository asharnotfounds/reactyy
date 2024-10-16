import React, { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase'; // Import your Firebase auth instance


export const Context = createContext()

const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      if (currentUser) setUser(currentUser)
      else {
        setUser(null)
      }
    })
    return () => {
      if (unsubscribe) unsubscribe();
    }
  }, [])

  const values = {
    user: user,
    setUser: setUser
  }
  return <Context.Provider value={values}>
    {!loading &&
      children
    }
  </Context.Provider>
};

export default AuthContext;

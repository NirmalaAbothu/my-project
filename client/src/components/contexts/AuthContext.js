import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext();
export function useAuth() {
     return useContext(AuthContext);
}

export function AuthProvider({ children }) {
     const [currentUser, setCurrentUser] = useState();
     const [loading, setLoading] = useState(true);

     function createAccountCard(email, password) {
          return auth.createUserWithEmailAndPassword(email, password);
     }

     function loginCard(email, password) {
          return auth.signInWithEmailAndPassword(email, password);
     }

     function logout() {
          return auth.signOut();
     }

     function resetPassword(email) {
          return auth.sendPasswordResetEmail(email);
     }

     useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
               setCurrentUser(user);
               setLoading(false);
          });
          return unsubscribe;
     }, []);

     const value = {
          currentUser,
          loginCard,
          createAccountCard,
          // logout,
          resetPassword,
     };
     return (
          <AuthContext.Provider value={value}>
               {!loading && children}
          </AuthContext.Provider>
     );
}

export default AuthContext;

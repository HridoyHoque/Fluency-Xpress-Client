import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { getRole } from "../api/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [role, setRole] = useState(null);


    // set role of users
    useEffect(() => {
        if(user){
            getRole(user.email)
            .then(data => {
                // setLoading(true);
                setRole(data)
            })
        }
    },[user])
    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email password signIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //   Google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // logout user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // update users profile information
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    // pass data
    const authInfo = {
        user,
        loading,
        role,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
        setRole
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    //01. Create account with email and password
    const createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //02. update Profile 
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {

        }).catch((error) => {
            console.log(error.message);
        });
    }

    //03. Sign in with email and password 
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //04. Log Out

    const logOut = (navigate) => {
        setLoading(true)
        return signOut(auth).then(() => {
            toast.success('Log Out Successfully')
            navigate('/')
        }).catch((error) => {
            toast.error('Something Wrong')
        });

    }

    //05. Sign in or Register By Google 
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //06. Sign in or Register by GitHub
    const github = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    //on Auth Changed

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        setCourse,
        course,
        createAccount,
        updateUser,
        logOut,
        Login,
        google,
        github,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
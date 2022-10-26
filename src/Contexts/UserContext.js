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

    //01. Create account with email and password
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //02. update Profile 
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {

        }).catch((error) => {
            console.log(error.message);
        });
    }

    //03. Sign in with email and password 
    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //04. Log Out

    const logOut = (navigate) => {
        return signOut(auth).then(() => {
            toast.success('Log Out Successfully')
            navigate('/')
        }).catch((error) => {
            toast.error('Something Wrong')
        });

    }

    //05. Sign in or Register By Google 
    const google = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //06. Sign in or Register by GitHub
    const github = () => {
        return signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
            });
    }


    //on Auth Changed

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
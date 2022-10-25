import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'shohug' });


    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
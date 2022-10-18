import React, { createContext } from 'react';

export const AuthContexts = createContext();

const AuthContext = ({children}) => {
    const authInfo = {name: 'Maruf'}
    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContext;
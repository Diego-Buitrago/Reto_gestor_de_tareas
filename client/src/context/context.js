import { createContext, useCallback, useMemo, useState } from 'react';

const  mi_autentificacion = 'mi_autentificacion';

export const AuthContext = createContext();

export default function  AuthProvider({children}) {
    const [isAutenticated, setIsAutenticated] = useState(localStorage.getItem(mi_autentificacion));

    const login = useCallback(() => {
        window.localStorage.setItem(mi_autentificacion, true)
        setIsAutenticated(true);
    }, []);

    const value = useMemo(() => ({
        login,
        isAutenticated
    }), [isAutenticated, login]);
    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
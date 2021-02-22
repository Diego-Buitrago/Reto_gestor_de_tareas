import { createContext, useCallback, useMemo, useState } from 'react';

const  mi_autentificacion = 'mi_autentificacion';

export const AuthContext = createContext();

export default function  AuthProvider({children}) {
    const [isAutenticated, setIsAutenticated] = useState(localStorage.getItem(mi_autentificacion));

    const login = useCallback(() => {
        window.localStorage.setItem(mi_autentificacion, true)
        setIsAutenticated(true);
    }, []);

    const logout = useCallback(() => {
        window.localStorage.removeItem(mi_autentificacion, true)
        window.localStorage.removeItem('id_usuario', true)
        window.localStorage.removeItem('editar_tarea', true)
        setIsAutenticated(false);
    }, []);

    const value = useMemo(() => ({
        login,
        logout,
        isAutenticated
    }), [isAutenticated, login, logout]);
    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
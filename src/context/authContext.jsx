import { createContext, useContext, useState } from 'react';
import { ROLES } from '../constent/roles';

const myToken = () => localStorage.getItem('token');
const myRole = () => localStorage.setItem('role', ROLES.GUSET);

export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [role, setRole] = useState(() => myRole() || ROLES.GUSET);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => myToken() || '');

    return (
        <AuthContext.Provider value={{ role, setRole, user, setUser, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;
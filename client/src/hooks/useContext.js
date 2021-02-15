import { useContext } from 'react';
import { AuthContext } from '../context/context';

export default function useAuthContext() {
    return  useContext(AuthContext);
}
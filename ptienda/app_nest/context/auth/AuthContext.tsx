import { createContext } from 'react';
import { IUser } from '../../interfaces/Users/IUser';
import { IAuth, IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IAuth;
    
    //firmas
    loginUser: (email: string, password: string) => Promise<boolean>;
    registerUser: (email: string, password: string, fullName: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );
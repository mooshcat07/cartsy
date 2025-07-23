import  { createContext, useEffect, useState } from 'react'
import { SignInWithEmailAndPassword, SignUpWithEmailAndPassword, HandleAutoAuthenticateUser } from '../lib/controllers/Authentication.js'

const redux = createContext(null)

export default function ReduxProvider({children}){
    const [user, setuser] = useState(null);
    const [session, setsession] = useState(null);
    const [isloading, setisloading] = useState(false);

    const SignUpWithEmailPassword = async({fullname, email, password}) => {
        try {
            const { user, session } = await SignUpWithEmailAndPassword({
                fullname: fullname,
                email: email,
                password: password
            });

            if(user, session){
                setuser(user);
                setsession(session);
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    const SignInWithEmailPassword = async({email, password}) => {
        try {
            const { user, session } = await SignInWithEmailAndPassword({
                email: email,
                password: password
            });

            if(user, session){
                setuser(user);
                setsession(session);
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    const AutoLogin = async() => {
        setisloading(true);
        try {
            const { user, session } = await HandleAutoAuthenticateUser();

            setuser(user);
            setsession(session);
        } catch (error) {
            throw new Error(error.message);
        } finally{
            setisloading(false);
        }
    }

    useEffect(() => {
        AutoLogin();    
    }, []);

    const dispatcher = {
        user,
        session,
        isloading,
        SignUpWithEmailPassword,
        SignInWithEmailPassword
    }

    return(
        <redux.Provider value={dispatcher}>
            {children}
        </redux.Provider>
    )
}

export { redux }
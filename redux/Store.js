import  { createContext, useState } from 'react'
import { SignUpWithEmailAndPassword } from '@/lib/controllers/Authentication'

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

    const dispatcher = {
        user,
        session,
        isloading,
        SignUpWithEmailPassword
    }

    return(
        <redux.Provider value={dispatcher}>
            {children}
        </redux.Provider>
    )
}

export { redux }
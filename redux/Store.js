import  { createContext, useState } from 'react'

const redux = createContext(null)

export default function ReduxProvider({children}){
    const [user, setuser] = useState(null);
    const [session, setsession] = useState(null);
    const [isloading, setisloading] = useState(true);

    const dispatcher = {
        user,
        session,
        isloading,
    }

    return(
        <redux.Provider value={dispatcher}>
            {children}
        </redux.Provider>
    )
}

export { redux }
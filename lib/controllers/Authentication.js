import { ID } from "appwrite"
import { account, avatar } from "../connection/appwrite.config"
import { CreateUserInstance, GetUserInstance } from "./Database";

const SignUpWithEmailAndPassword = async({fullname, email, password}) => {
    try {
        const session = await account.create(ID.unique(7), email, password, fullname);

        if(session){
            const Avatar = avatar.getInitials(fullname[0])
            const user = await CreateUserInstance({
                id: session.$id,
                fullname: session.name,
                email: session.email,
                createdAt: session.$createdAt,
                avatar: Avatar
            });

            if(user){
                const { user, session} = await SignInWithEmailAndPassword({
                    email: email,
                    password: password
                });

                return { user, session }
            }
        }

    } catch (error) {
        throw new Error(error)
    }
}

const SignInWithEmailAndPassword = async({ email, password }) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        if(session){
            const user = await GetUserInstance(session.$id);

            return { session, user}
        }
    } catch (error) {
        throw new Error(error)
    }
}

export { SignUpWithEmailAndPassword, SignInWithEmailAndPassword }
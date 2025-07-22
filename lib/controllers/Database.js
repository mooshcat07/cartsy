import { ID, Query } from "appwrite";
import { database } from "../connection/appwrite.config";

const CreateUserInstance = async({fullname, email, id, createdAt, avatar}) => {
    try {
        const user = await database.createDocument(
            process.env.EXPO_PUBLIC_APPWRITE_DATABASE,
            process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION,
            ID.unique(10),
            {
                UserID: id,
                Fullname: fullname,
                Email: email,
                Avatar: avatar,
                CreatedAt: createdAt
            }
        )

        if(user){
            return user
        }
    } catch (error) {
        throw new Error(error);
    }
}

const GetUserInstance = async(recordID) => {
    try {
        const user = await database.listDocuments(
            process.env.EXPO_PUBLIC_APPWRITE_DATABASE,
            process.env.EXPO_PUBLIC_APPWRITE_USER_COLLECTION,
            [
                Query.equal('UserID', recordID)
            ]
        );

        if(user){
            return user
        }

    } catch (error) {
        throw new Error(error)
    }
}

export { CreateUserInstance, GetUserInstance }
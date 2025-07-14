import { Account, Avatars, Client, Databases } from 'appwrite'

const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
;

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export { account, avatar, database }
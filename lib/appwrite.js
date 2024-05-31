import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "665979430011b5e266bf",
  databseId: "66597ad00034bd7ffa80",
  usersCollectionId: "66597b1a003520421e5f",
  videosCollectionId: "66597b370032167f8534",
  storageId: "66597f29000db4de12f0",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
  try{
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    );

    if(!newAccount){
      throw Error;
    }
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
        appwriteConfig.databseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email: email,
            username: username,
            avatar: avatarUrl,
        }
    )

    return newUser;

  }catch (error){
    console.error(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
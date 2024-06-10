const MONGODB_URI = 'mongodb+srv://nguyenlong0004:6crm2LcyH8crW74L@cluster0.imduv3n.mongodb.net/'
const DATABASE_NAME = 'longccd';
//import { version } from "joi";
import { MongoClient, ServerApiVersion } from "mongodb";

let databaseInstance = null;

const mongoClinetInstance = new MongoClient(MONGODB_URI,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

export const CONNECT_DB = async () => {
    await mongoClinetInstance.connect()
    databaseInstance = mongoClinetInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
    if (!mongoClinetInstance)
        throw new Error('ket noi database')
    return databaseInstance
}
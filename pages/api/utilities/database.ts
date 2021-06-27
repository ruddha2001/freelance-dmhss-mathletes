import { Db, MongoClient } from "mongodb";

let db: Db;

async function initializeClient(): Promise<Db> {
  console.log(process.env.MONGODB_URI);
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db("dmhss");
}

export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};

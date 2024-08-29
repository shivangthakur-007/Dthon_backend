import { MongoClient } from "mongodb";

const CONNECTIONURI =
  process.env.CONNECTION_URI ||
  "mongodb+srv://thakurshivang579:57575751@cluster0.aj8hrur.mongodb.net/";
// console.log(CONNECTIONURI)

const connectionTodb = async () => {
  try {
    const client = new MongoClient(CONNECTIONURI);
    let db;
    client.connect((err) => {
      if (err) {
        throw err;
      }
      db = client.db("Dthon");
      console.log(`connected to Mongodb ${db}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectionTodb;

import { MongoClient } from "mongodb"


const URI = "mongodb+srv://otaviotm09:quo9939ZA7T9nPr0@cluster0.vkuz6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
//JavaScript Assincrono
// await , async
// Espera isso aconter para q eu prossiga,  quando eu tiver no await preciso avisar q estou em uma função assincrona
//Fullfilled
export const db = client.db("Spotify");
const dbList = await db.collection("Songs").find({}).toArray();

console.log(dbList);




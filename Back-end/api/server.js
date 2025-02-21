//         POST    GET    PUT      DELET
//CRUD -> Create, Read, Uptade and Delete

//Middleware atual entre a escuta e o solicitante
import express from "express";
import { db } from "./connect.js";
import cors from "cors";

// iniciar Servidor "node  --watch ./api/server.js"
const app = express();

const PORT = 3002;

app.use(cors());

app.get('/', (request,response)=>{
    response.send("Só vamos para os endpoints '/artists' e '/songs'");
});

app.get('/artists', async (request,response)=>{
    response.send(await db.collection("Artists").find({}).toArray());
});

app.get('/songs', async (request,response)=>{
    response.send(await db.collection("Songs").find({}).toArray());
});

app.listen(PORT,()=> {
    console.log(`Servidor esta escutando na porta ${PORT}`);
});
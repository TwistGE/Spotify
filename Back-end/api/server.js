//         POST    GET    PUT      DELET
//CRUD -> Create, Read, Uptade and Delete
import express from "express";
import { artistArray } from "../../Front-end/src/assets/database/artists.js";
import { songsArray } from "../../Front-end/src/assets/database/songs.js";

const app = express();

const PORT = 3002;

app.get('/', (request,response)=>{
    response.send("Só vamos para os endpoints '/artists' e '/songs'");
});

app.get('/artists', (request,response)=>{
    response.send(artistArray);
});

app.get('/songs', (request,response)=>{
    response.send(songsArray);
});

app.listen(PORT,()=> {
    console.log(`Servidor esta escutando na porta ${PORT}`);
});
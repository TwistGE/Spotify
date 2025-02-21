import { artistArray } from "../../Front-end/src/assets/database/artists.js";
import { songsArray } from "../../Front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj)=>{
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id

    return newArtistObj;
})

const newSongArray = songsArray.map((currentSongObj)=>{
    const newSongObj = {...currentSongObj};
    delete newSongObj.id

    return newSongObj;
})

const songsInsertResponse = await db.collection("Songs").insertMany(newSongArray);
const artistsInsertResponse = await db.collection("Artists").insertMany(newArtistArray);

console.log(songsInsertResponse);
console.log(artistsInsertResponse);
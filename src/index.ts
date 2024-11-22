//pour utiliser express dans notre server on doit limporter
import express from 'express';
import './db';
import cors from "cors";

import noteRouter from "./routers/note.router";

/**Juste a titre d'explication vue qu'on a clean up notre code pour chaque action requise on doit utiliser url ainsi pour faire le travail.
 * localhost:8000/note/noteId
 * localhost:8000/note/create
 * localhost:8000/note/create
*/

//creation d'un server
const app = express();

app.use(cors());            //pour eviter des erreur de lecture par axios

//this will parse post request coming from fetch.post() method this methode have to be placed before the router setup.
app.use(express.json());

//this will parse post request coming from html form
app.use(express.urlencoded({extended: false}));

app.use("/note", noteRouter);

//listen to some port
app.listen(8000, ()=>{
    console.log("Listening");
})
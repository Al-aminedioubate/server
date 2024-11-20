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

//const cors = require('cors');
app.use(cors());


app.use("/note", noteRouter);

//this will parse post request coming from fetch.post() method
app.use(express.json());

//this will parse post request coming from html form
app.use(express.urlencoded({extended: false}));

//listen to some port
app.listen(8000, ()=>{
    console.log("Listening");
})
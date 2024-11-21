//Data base import
import mongoose from 'mongoose';

//Etablir la connection a la base de donnees
mongoose.connect('mongodb://localhost:27017/note-app').then
(() => {
    console.log("Connected to DB!");
}).catch((err)=>{
    console.log("DB Connection failed!", err);
})
import { Schema, model } from "mongoose";

//creation d'interface qui est comme determination de type des variables.
export interface NoteDocument {
    title: string,
    description?: string,
}

const noteSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        trim: true
    }
})

export default model<NoteDocument>("Note", noteSchema);

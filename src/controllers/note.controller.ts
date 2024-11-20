import { RequestHandler } from 'express';
import Note, { NoteDocument } from '../models/note'

//determination de type de variable dans le body
export interface IncomingBody {
    title: string,
    description: string,
}

export const create: RequestHandler = async (req, res) => {
    /*const newNote = new Note<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description,
    })

    await newNote.save();*/

    Note.create<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description,
    })

    res.json({message: "successfylly created!!"});
};

export const updateSingDoc: RequestHandler =  async (req, res) =>{
    const {noteId} = req.params;

    /*const note = await Note.findById(noteId);
    if(!note) return res.json({error: "Note not found!!"});
    const {title, description} = req.body as IncomingBody;
    if(title) note.title = title;
    if(description) note.description = description;*/

    const {title, description} = req.body as IncomingBody;
    const note = await Note.findByIdAndUpdate(
        noteId,
        {title, description},
        {new: true}
    );

    if(!note) return res.json({error: "Note not found!!"});

    await note.save();

    res.json({note});
};

export const removeSingleDoc: RequestHandler = async (req, res) => {
    const {noteId} = req.params;

   const removedNote = await Note.findByIdAndDelete(noteId);
   if(!removedNote){
        return res.json({error: "could not remove note"});
    } 

    res.json({message: "note removed successfully"});
}; 

export const readingAllDoc: RequestHandler = async (req, res) => {
    const notes = await Note.find();
    res.json({notes});
}

export const readingSingleDoc: RequestHandler = async (req, res) => {
    const {id} = req.params;                        // or const noteId = req.params.noteId;
    const note = await Note.findById(id);
    if(!note) return res.json({error: "Note not found"});
    res.json({note});
}

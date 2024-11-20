import { Router } from "express";
import { create, readingAllDoc, readingSingleDoc, removeSingleDoc, updateSingDoc } from "../controllers/note.controller";

const router = Router()

//created documents   
router.post('/create', create),

//updated documents 
router.patch("/:noteId", updateSingDoc);

//removing data in the DB
router.delete("/:noteId", removeSingleDoc); 

//reading an entire document in the DB
router.get('/', readingAllDoc);

//Reading a single document with a particylar id in the DB
router.get('/:id', readingSingleDoc);


export default router
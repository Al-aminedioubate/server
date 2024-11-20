CRUD => CREATE READ UPDATE DELETE

/ => READ all the note/tasks

/ => create (post) => create a note/tasks

/:uniqueID => read (get) => send the note related to this uniqueID.

/:uniqueID => update(post/put/patch) => update the note related to this uniqueId

/:uniqueId => delete(delete) => delete the note related to this uniqueId.

//avant d'inserer des donnees dans notre base de donnees on a besoin d'installer schema

//synthax object => const {noteId} = req.params 
//desctructeur synthax => const {} = req.body.title si cela provient de body.

HTTP Request Methods

Get: Used to retrieve data from the server. this method is the most commonly used HTTP method and is typically used to fetch information from without modifying any data.

POST: Used to send data to the server. this method is typically used to submit information or to create a new record to the server.

PUT: Used to update data on the server .this method is used to update an existing resource on the server.

PATCH : it is same as PUT but it will update partially

DELETE :used to delete data on the server. THis method is use to remove a resource from the server.

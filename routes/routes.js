const fs = require('fs');
const path = require('path');

module.exports = app => {

    // notes variable
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var notes = JSON.parse(data);

        // API ROUTES
     
    
        //  the /api/notes get route
        app.get("/api/notes", function(req, res) {
            // Read the db.json file and return all saved notes as object;
            res.json(notes);
        });

        // the /api/notes post route
        app.post("/api/notes", function(req, res) {
            // grabs a new note, adds it to db.json, then returns the new note
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: "+newNote.title);
        });

        // gets  a note with specific id
        app.get("/api/notes/:id", function(req,res) {
            // display json for the notes array indices of the provided id
            res.json(notes[req.params.id]);
        });

        // Deletes a note with id
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted note with id "+req.params.id);
        });

        // VIEW ROUTES
      

        // Display notes.html 
        app.get('/notes', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        
        // Display index.html 
        app.get('*', function(req,res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        //when a note is added or deleted updates JSON file
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }

    });

}


//var notesData = require('../db/db.json');
const fs = require('fs');
const path = require('path');


module.exports = function (app) {

    //notes variable 
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);

        ///api routes ---------------------------------------

        //get routes api/notes
        app.get('/api/notes/;id', function (req, res) {
            //reads the db.json and returns saved notes as JSON
            res.jason(notes);
        });

        // /api/notes post route
        app.post('/api/notes', function (req, res) {
            //retireves a new note to db.json
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log('added new note: "+newNote.title');
        });

        //grabs the note with a specific id

        app.get('/api/notes/:id', function (req, res) {
            //display json for the notes array with indicated id
            res.json(notes[req.params.id]);

        });

        //Deletes notes with indicated id
        app.delete('/api/notes/:id', function (req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log('Note ' + req.params.id + 'was deleted');
        });

        //routes for posting to html--------------------------------

        // displays notes in html when note is accessed
        app.get('/notes', function (req, res) {
            res.sendFile(path.join(_dirname, "../public/notes.html"));
        });
        // displays index.html-opening page- when all other routes are asscessed
        app.get('*', function (req, res) {
            res.sendFile(path.join(_dirname, "../puclic/index.html"));
        });
        //updates when a note is added or deleted
        fucntion updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            });
        }



    })
var notesData = require('../db/db.json');

module.exports = function (app) {


    app.get('/api/notes', function(req, res) {
        res.jason(notesData);
    });
//try a for each function! there is only one condition here...the data retrieved..not sure what to put here I want it to loop for the number of notes but cant decide what to do after
    app.post('/api/notes', function (req, res) {
        if(notesData.length < 5) {
            notesData.push(req.body);
            res.jason(true);
        } else {
        ///what to do when the array is done of data. 
        }
    });
}
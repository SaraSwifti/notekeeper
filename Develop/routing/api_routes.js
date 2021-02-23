var notesData = require('../db/notes_data.js');

module.exports = function (app) {
    app.get('/api/notes', function(req, res) {
        res.jason(notesData);
    });
}
const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: 'GET Request'});

notesCtrl.createNote = (req, res) => res.json({message: 'POST Request'});

notesCtrl.getNote = (req, res) => res.json({title: 'Note Title'})

notesCtrl.updateNote = (req, res) => res.json({message: 'Note Updated'})

notesCtrl.deleteNote = (req, res) => res.json({message: 'Note Deleted'})

module.exports = notesCtrl;
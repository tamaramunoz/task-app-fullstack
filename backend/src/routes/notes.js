const { Router } = require('express');
const router = Router();


router.route('/')
    .get((req, res) => res.json({message: 'GET Request'}))
    .post((req, res) => res.json({message: 'POST Request'}))

router.route('/:id')
    .get((req, res) => res.json({title: 'Note Title'}))
    .put((req, res) => res.json({message: 'Note Updated'}))
    .delete((req, res) => res.json({message: 'Note Deleted'}))


module.exports = router; 
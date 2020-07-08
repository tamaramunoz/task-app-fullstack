const usersCtrl = {};
const User = require('../models/User');

usersCtrl.getUsers = (req, res) => res.send('Users Routes');

usersCtrl.createUser = (req, res) => res.send('Users Routes');

usersCtrl.deleteUser = (req, res) => res.send('Users Routes');

module.exports = usersCtrl;
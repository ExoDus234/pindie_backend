const usersRouter = require('express').Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, checkEmptyNameAndEmailAndPassword ,createUser, sendUserCreated);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.put('/users/:id', findUserById, checkEmptyNameAndEmail, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', findUserById, deleteUser, sendUserDeleted);

module.exports = usersRouter;

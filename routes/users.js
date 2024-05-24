const usersRouter = require('express').Router();

const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, hashPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');

usersRouter.get('/users',
    findAllUsers,
    sendAllUsers
);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.get('/users/:id',
    findUserById,
    sendUserById
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    updateUser,
    sendUserUpdated
);
usersRouter.delete('/users/:id',
    findUserById,
    deleteUser,
    sendUserDeleted);

module.exports = usersRouter;

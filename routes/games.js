const gamesRouter = require('express').Router();

const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest } = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkAuth } = require("../middlewares/auth.js");

gamesRouter.get('/games',
    findAllGames,
    sendAllGames);
gamesRouter.post('/games',
    findAllGames,
    checkIsGameExists,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated);
gamesRouter.get('/games/:id',
    findGameById,
    sendGameById);
gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
);
gamesRouter.delete('/games/:id',
    checkAuth,
    findGameById,
    deleteGame,
    sendGameDeleted);

module.exports = gamesRouter;
const categoriesRouter = require('express').Router();

const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, createCategory, sendCategoryCreated);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.put('/categories/:id', findCategoryById, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', findCategoryById, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;

const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/register', expenseController.register);
router.post('/login', expenseController.login);
router.post('/add', expenseController.addExpense);
router.get('/summary/:id', expenseController.getSummary);

module.exports = router;

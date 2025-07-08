const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenses');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', expenseRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));

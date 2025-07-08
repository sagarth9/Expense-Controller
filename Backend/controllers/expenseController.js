const db = require('../db');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.send("User registered");
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length > 0) res.json(result[0]);
      else res.status(401).send("Invalid credentials");
    });
};

exports.addExpense = (req, res) => {
  const { user_id, amount, category, type, date, description } = req.body;
  db.query("INSERT INTO expenses (user_id, amount, category, type, date, description) VALUES (?, ?, ?, ?, ?, ?)",
    [user_id, amount, category, type, date, description],
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.send("Entry added");
    });
};

exports.getSummary = (req, res) => {
  const userId = req.params.id;
  db.query(`SELECT 
              SUM(CASE WHEN type='income' THEN amount ELSE 0 END) AS total_income,
              SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) AS total_expense
            FROM expenses WHERE user_id = ?`,
    [userId],
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.json(result[0]);
    });
};

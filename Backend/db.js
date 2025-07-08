const mysql = require('mysql2');
const conn = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'SAG106', 
  database: 'expense_tracker'
});
conn.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected!");
});
module.exports = conn;

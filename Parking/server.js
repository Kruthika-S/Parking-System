import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: 'kruthi@1234',       // Replace with your MySQL password
  database: 'parking'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Signup Endpoint
app.post('/api/signup', (req, res) => {
  const { name, age, emailID, mobNo, password, confirm_password, gender } = req.body;
  
  const sql = `
    INSERT INTO login 
    (name, age, emailID, mobNo, password, confirm_password, gender) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(sql, 
    [name, age, emailID, mobNo, password, confirm_password, gender], 
    (err, result) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ success: true });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test route
app.get('/', (req, res) => {
    return res.send('Hello from the BackEnd server!');
});

// Get all diaries
app.get('/diaries', (req, res) => {
    const sqlSelect = 'SELECT * FROM diaries';
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error fetching diaries');
        } else {
            return res.json(result);
        }
    });
});

// Create a new diary
app.post('/diaries', (req, res) => {
    const { title, content } = req.body;
    const sqlInsert = 'INSERT INTO diaries (title, content) VALUES (?, ?)';
    db.query(sqlInsert, [title, content], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error inserting diary');
        }
        return res.status(201).json({ id: result.insertId, title, content }); // Respond with the new diary entry
    });
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`); // Correct port number
});

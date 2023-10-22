const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
//const bcrypt = require('bcrypt');
const crypto = require('crypto');

const app = express();
const port = 3001;

// Create a MySQL database connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // You can adjust the limit as needed
  host: '62.72.28.154',
  user: 'u549750371_stuffinadmin',
  password: 'Stuffinadmin@2023',
  database: 'u549750371_stuffinweb',
});

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());


// Endpoint to authenticate a user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  const query = 'SELECT * FROM users WHERE username = ?';
  pool.query(query, [username], async (err, results) => {
    if (err) {
      console.error('Error fetching user: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: 'User not found' });
      return;
    }

    const user = results[0];
    const hashedPassword = hashPassword(password);
    console.log(hashedPassword);
    console.log(user.password);
    // Compare the provided password with the hashed password from the database
    //const passwordMatch = await bcrypt.compare(password, user.password);

    if (hashedPassword == user.password) {
      res.status(200).json({ message: 'User authenticated' });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  });
});
function hashPassword(password) {
  const sha256 = crypto.createHash('sha256');
  sha256.update(password, 'utf8');
  return sha256.digest('hex');
}
// Endpoint to post values to the database
app.post('/addBlog', (req, res) => {
  const { image, heading, date, author, subheading, description, author_image, author_bio, category } = req.body;

  const newBlog = {
    image,
    heading,
    date,
    author,
    subheading,
    description,
    author_image,
    author_bio,
    category
  };

  const query = 'INSERT INTO blog SET ?';

  pool.query(query, newBlog, (err, result) => {
    if (err) {
      console.error('Error posting to the database: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'Blog posted successfully' });
  });
});

// Endpoint to fetch paginated data from the database
app.get('/getBlogs', (req, res) => {
  const { page, limit } = req.query;
  const offset = (page - 1) * limit;

  const query = 'SELECT * FROM blog LIMIT ? OFFSET ?';
  const values = [parseInt(limit), offset];

  pool.query(query, values, (err, results) => {
    if (err) {
      console.error('Error fetching data from the database: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





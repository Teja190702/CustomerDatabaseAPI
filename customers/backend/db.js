const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 9000;

// CORS middleware
app.use(cors());

// PostgreSQL configuration
const pool = new Pool({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "Lakshmi@442003",
        database: "postgres"
});

// Example route
app.get('/data', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM cust');
    const data = result.rows;
    res.json(data);
    console.log(data);
    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

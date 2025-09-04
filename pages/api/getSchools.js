// `pages/api/getSchools.js` file

import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'schooldb',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database for fetching data.');
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const query = 'SELECT id, name, address, city, image FROM schools'; // `id`-ஐச் சேர்த்துவிட்டேன்

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ message: 'Failed to fetch school list', error: error.message });
    }

    res.status(200).json(results);
  });
}
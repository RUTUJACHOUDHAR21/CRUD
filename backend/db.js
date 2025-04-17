const { Pool } = require('pg');

const pool = new Pool({
  user: 'rutuja',
  host: 'dpg-d00c5u2li9vc739oksb0-a',
  database: 'crud_qguw',
  password: 'kvbHaChQR1aF91d1WlgelL6YIHx4aqwZ',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;

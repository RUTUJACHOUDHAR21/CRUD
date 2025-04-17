// Load environment variables (only needed for local dev)
require('dotenv').config();
const { Pool } = require('pg');

// Create connection pool using DATABASE_URL from Render or .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://rutuja:kvbHaChQR1aF91d1WlgelL6YIHx4aqwZ@dpg-d00c5u2li9vc739oksb0-a/crud_qguw',
  ssl: {
    rejectUnauthorized: false, // Important for Render
  }
});

module.exports = pool;

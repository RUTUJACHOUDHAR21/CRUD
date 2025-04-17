const express = require('express');
const cors = require('cors');
const studentRoutes = require('./studentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/students', studentRoutes);

// Optional root route for testing
app.get('/', (req, res) => {
  res.send('✅ Student CRUD API is running.');
});

// Server
const PORT = process.env.PORT || 10000; // Use 10000 or any other safe port (Render chooses this dynamically)
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

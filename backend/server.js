const express = require('express');
const cors = require('cors');
const studentRoutes = require('./studentRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

// Optional test route
app.get('/', (req, res) => {
  res.send('Student CRUD API is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

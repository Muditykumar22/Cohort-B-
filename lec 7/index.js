const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./lib/db');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Static files (example upload dir)
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

// Health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// 404 + errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tasks_demo';

connectDB(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('DB connection error', err);
    process.exit(1);
  });
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import shortEatsRoutes from './routes/shortEatsRoutes.js';
import userRouter from './routes/userRoutes.js';

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use('/api/shortEats', shortEatsRoutes);
app.use('/api/user', userRouter);
app.use('/shortEats', express.static('Uploads/shortEats'));

// Ensure the root route is defined
app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
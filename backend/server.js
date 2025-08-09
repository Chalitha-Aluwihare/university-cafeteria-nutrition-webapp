import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import shortEatsRoutes from './routes/shortEatsRoutes.js';

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use('/api/shortEats',shortEatsRoutes);
app.use('/shortEats', express.static('uploads/shortEats'));

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON body

// In-memory tasks array
let tasks = [];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const task = { title, createdAt: new Date() };
  tasks.push(task);
  res.status(201).json(task);
});

// Delete all tasks
app.delete('/api/tasks', (req, res) => {
  tasks = [];
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});


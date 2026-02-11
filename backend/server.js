const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

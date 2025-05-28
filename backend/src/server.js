// Basic Express server setup that listens on port 3000

const express = require('express');
const app = express();

// Define the port. It's good practice to use an environment variable
// for the port in production, but fall back to 3000 for development.
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (if you're sending JSON from MAUI/Angular)
app.use(express.json());
// Middleware to parse URL-encoded bodies (less common for APIs, but good to know)
// app.use(express.urlencoded({ extended: true }));

// --- Your API Endpoints Will Go Here ---
// Example:
app.get('/', (req, res) => {
  res.send('WeSpark Backend API: Where Together We Spark Potential!');
});

// POST /api/feedback endpoint (as per your project description)
app.post('/api/feedback', (req, res) => {
  const feedbackData = req.body;
  console.log('Received feedback:', feedbackData);
  // TODO: Store feedbackData (in-memory or to feedback.json)
  res.status(201).json({ message: 'Feedback received successfully', data: feedbackData });
});

// GET /api/feedback endpoint (as per your project description)
app.get('/api/feedback', (req, res) => {
  console.log('Fetching all feedback...');
  // TODO: Retrieve feedbackData (from in-memory store or feedback.json)
  const allFeedback = [
    { rating: 5, comment: "Initial test feedback!" },
    { rating: 3, comment: "Another piece of feedback." }
  ]; // Replace with actual data retrieval
  res.status(200).json(allFeedback);
});
// --- End of API Endpoints ---


// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`WeSpark backend server is running on http://localhost:${PORT}`);
});
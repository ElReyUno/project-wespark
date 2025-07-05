// Basic Express server setup that listens on port 3000

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Define the port. It's good practice to use an environment variable
// for the port in production, but fall back to 3000 for development.
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const FEEDBACK_FILE_PATH = path.join(__dirname, '..', 'feedback.json');

// Enable CORS for all routes (frontend integration)
// CORS could also be configured for production for specific domains
app.use(cors({
  origin: ['http://localhost:4200', 'http://192.168.0.152:4200'], // Angular dev URLs
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Middleware to parse JSON bodies (Sends JSON from MAUI/Angular)
app.use(express.json());
// Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

// Function to read feedback from the JSON file
const readFeedbackFromFile = () => {
  try {
    if (fs.existsSync(FEEDBACK_FILE_PATH)) {
      const fileData = fs.readFileSync(FEEDBACK_FILE_PATH, 'utf-8');
      return JSON.parse(fileData);
    }
    return []; // Return empty array if file doesn't exist
  } catch (error) {
    console.error('Error reading feedback file:', error);
    return []; // Return empty array on error to prevent crashes
  }
};

// Function to write feedback to the JSON file
const writeFeedbackToFile = (feedbackArray) => {
  try {
    fs.writeFileSync(FEEDBACK_FILE_PATH, JSON.stringify(feedbackArray, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing feedback file:', error);
  }
};

// --- API Endpoints ---
// GET /feedback – retrieve stored data
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

// POST /feedback endpoint – store new data to feedback.json
app.post('/feedback', (req, res) => {
  const feedbackData = req.body;
  if (!feedbackData || typeof feedbackData !== 'object') {
    return res.status(400).json({ message: 'Invalid feedback data.' });
  }
  const allFeedback = readFeedbackFromFile();
  allFeedback.push(feedbackData);
  writeFeedbackToFile(allFeedback);
  res.status(201).json({ message: 'Feedback received successfully', data: feedbackData });
});

// GET /feedback endpoint – retrieve stored data
app.get('/feedback', (req, res) => {
  const allFeedback = readFeedbackFromFile();
  res.status(200).json(allFeedback);
});
// --- End of API Endpoints ---


// Start the server and listen on the defined port
app.listen(PORT, HOST, () => {
  console.log(`WeSpark backend server is running on http://${HOST}:${PORT}`);
});
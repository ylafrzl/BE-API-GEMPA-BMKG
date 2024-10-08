// server.js

const http = require('http');
const app = require('./app');
const config = require('./config/config'); // Assuming you have a config file for port and other settings

// Get the port from the configuration or use a default
const port = process.env.PORT || config.port || 3000;

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});
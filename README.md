# TIF - Tablet Info Finder

TIF (Tablet Info Finder) is a web application that allows users to find information about various tablets.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client-side of the application is built with React. The main application code is located in the `src/` directory. The `context/` directory contains the React context for user data, and the `components/` directory contains various React components used throughout the application.

### Server

The server-side of the application is built with Node.js and Express. The `controllers/` directory contains the application's controllers, the `helpers/` directory contains helper functions, and the `models/` directory contains the Mongoose models for the application's data.

## Getting Started

To get started with the project, clone the repository and install the dependencies in both the client and server directories:

```sh
# Clone the repository
git clone https://github.com/Mohit6304/TIF.git

# Navigate to the client directory
cd TIF/client

# Install the client dependencies
npm install

# Navigate to the server directory
cd ../server

# Install the server dependencies
npm install

Running the Application
To run the application, you'll need to start both the client and the server:
# Start the client
cd TIF/client
npm start

# Start the server
cd ../server
npm start


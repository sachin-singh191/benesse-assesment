# Quiz Application

This project is a simple quiz application built with the MERN stack (MongoDB, Express, React, and Node.js). It allows users to sign up, log in, take quizzes, and view their results.

## Features

- **User Authentication**: Users can sign up and log in.
- **Quiz Interface**: Users can take quizzes.
- **Results Summary**: Users can view results immediately after completing quizzes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following installed:
- Node.js
- MongoDB
- npm

### Setup

#### Server

1. **Navigate to the project directory**:
    ```bash
    cd path/to/benesse-assesment
    ```

2. **Install NPM packages**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the project root.
    - Add `MONGO_URI=your_mongodb_uri_here`.

4. **Populate the database**:
    ```bash
    node insertQuestions.js
    ```

5. **Start the server**:
    ```bash
    npm start
    ```

#### Client

1. **Navigate to the client directory**:
    ```bash
    cd client
    ```

2. **Install NPM packages**:
    ```bash
    npm install
    ```

3. **Start the React development server**:
    ```bash
    npm start
    ```

This will launch the application in your default web browser on `http://localhost:3000`.

## Using the Application

- **Signup/Login**: First, sign up for an account or log in.
- **Take a Quiz**: Navigate to the quiz section via the navigation bar.
- **View Results**: After completing the quiz, your results will be displayed immediately.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - Server Environment
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Database

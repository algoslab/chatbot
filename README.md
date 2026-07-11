# Chatbot

A simple chatbot application built with Node.js. Follow the steps below to clone, configure, install dependencies, and run the project locally.

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (recommended: latest LTS version)
* npm (comes with Node.js)
* Git

## Installation

Clone the repository:

```bash
git clone https://github.com/algoslab/chatbot.git
```

Navigate into the project directory:

```bash
cd chatbot
```

Create your environment configuration file:

```bash
cp .env.example .env
```

Install project dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
node server.js
```

After the server starts, open your browser and visit the application URL shown in the terminal.

Example:

```
http://localhost:3000
```

## Environment Configuration

The project uses environment variables for configuration.

Copy `.env.example` to `.env` and update the values according to your local setup:

```bash
cp .env.example .env
```

## Project Structure

```
chatbot/
├── server.js          # Application entry point
├── .env.example       # Example environment configuration
├── package.json       # Project dependencies and scripts
└── ...
```

## Available Commands

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

## Troubleshooting

* Make sure all required environment variables are configured in `.env`.
* Ensure the required port is available before starting the server.
* Check the terminal output for error messages if the application does not start.

## License


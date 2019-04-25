# Birdie Technical Test Application

> Create full stack web application that visualizes database data.

> Application should allow to select a column (amongst demographic data), then display, for each different value in this column, number of lines with this value, and "age" value average. Values must be sorted by decreasing order. One can display only 100 first values.

### _A config file is required to access the database. Please create a `config.js` in the root directory which follows the schema below_

```bash
const config = {
  host: 'hosthere',
  port: porthere,
  user: 'userhere',
  password: 'passwordhere'
}

module.exports = config
```

## Quick Start

```bash
# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## App Info

### Author

Gareth Cassin

### Version

1.0.0

### License

This project is licensed under the MIT License

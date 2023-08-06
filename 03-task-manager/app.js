const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config()

const port = 3001;

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes

app.use('/api/v1/tasks', tasks);
app.use(notFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start()

const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://<username>:<password>@cluster0.xgnakrk.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to DB...'))
  .catch((err) => console.log(err));

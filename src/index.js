const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to DB
mongoose
  .connect(process.env.DATABASE_URL || 'mongodb://localhost/users', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('> Connected...'))
  .catch((err) =>
    console.log(`> Error while connecting to mongoDB : ${err.message}`)
  );

app.listen(3000, () => console.log('Server running......'));

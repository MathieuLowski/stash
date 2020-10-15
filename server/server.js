const express = require('express');

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/home', (req, res) => {
  res.send({ status:200, express: 'El matios' });
});
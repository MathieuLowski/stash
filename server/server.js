const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");

const port = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"))
app.use(express.json());
app.use(helmet())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/home', (req, res) => {
  res.send({ status:200, express: 'El ' });
});

// Changer le menu. Faire comme Mcdo avec uberbeats. Click sur la
// categorie et mettre un anchor vers les item associe. 

// Rendre le background du menu fix sur scrool down. "Parallax scrolling effect"

// Setup online store (food order, gift certificate, merchandise etc.)
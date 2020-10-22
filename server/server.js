const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");


const {handleContactForm, handleBoxAccess}=require("./handlers");

const port = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"))
app.use(express.json());
app.use(helmet())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/home', (req, res) => {
  res.send({ status: 200, express: 'El polakoski ' });
});

//ENDPOINTS
app.post("/contactForm", handleContactForm);
app.get("/mapBox", handleBoxAccess);






// Setup online store (food order, gift certificate, merchandise etc.)

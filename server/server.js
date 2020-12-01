const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");


const { handleBoxAccess}=require("./handlers");

const port = process.env.PORT || 5000;

const app = express();
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(helmet())

const handleContactForm = (req, res) =>{
  console.log("Form Content", req.body);
  const {name, telNumber, mail, subject, mailContent} = req.body;

  let transporter = nodemailer.createTransport({
    service:'gmail',

    auth: {
      user:'rudy102dev@gmail.com',
      pass:'102polskawygra' 
    }
  });
  
  const mailOptions = {
    from:mail,
    to:`rudy102dev@gmail.com`,
    subject:subject,
    text:mailContent,
  };
 
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log("Error is",error);
    } else {
      console.log('Email sent: ' + info.response);
      res
        .status(200)
        .json({ status: 200, message: "Message succesfully sent." });
    }
  });
  
};

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/home', (req, res) => {
  res.send({ status: 200, express: 'El polakoski ' });
});

//ENDPOINTS
app.post("/contactForm", handleContactForm);
app.get("/mapBox", handleBoxAccess);



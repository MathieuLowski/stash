const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth ={
    auth:{
        api_key:"4b8de68b1a45dba6bacd280946cfbdb2-53c13666-37a43133",
        domain:"sandboxf91a8fe8b21044608cf2b2db43737766.mailgun.org"
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions= {
    from:"mathieu.lowski@gmail.com",
    to:"rudy102dev@gmail.com",
    subject:"test mail",
    text:"Hopefully it won't take to much time !!"
};

transporter.sendMail(mailOptions, function(error, data){
    if (error) {
        console.log("Error is",error);
        } else {
          console.log('Email sent: ' + data.response);
          res
            .status(200)
            .json({ status: 200, message: "Message succesfully sent." });
        }
})
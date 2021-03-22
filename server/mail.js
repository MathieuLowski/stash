const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const { AUTH_API_KEY, DOMAIN } = require("./config/keys");

const auth = {
  auth: {
    api_key: AUTH_API_KEY,
    domain: DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: "mathieu.lowski@gmail.com",
  to: "rudy102dev@gmail.com",
  subject: "test mail",
  text: "Hopefully it won't take to much time !!",
};

transporter.sendMail(mailOptions, function (error, data) {
  if (error) {
    console.log("Error is", error);
  } else {
    console.log("Email sent: " + data.response);
    res.status(200).json({ status: 200, message: "Message succesfully sent." });
  }
});

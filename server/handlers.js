require("dotenv").config();
const {SECRET_KEY} = process.env;

const handleContactForm = (req, res) =>{
    console.log("Form Content", req.body);
    const {name, telNumber, mail, subject, mailContent}=req.body;

}

const handleBoxAccess = (req, res)=>{
    res.send({ status: 200, message: SECRET_KEY });
};

module.exports={
    handleContactForm, handleBoxAccess
}
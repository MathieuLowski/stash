import React, {useState} from "react";
import styled from "styled-components";

import {FiSend} from "react-icons/fi"

import { COLORS } from "../Constants";

const ContactForm = ()=>{
    const [name, setName] = useState(null);
    const [telNumber, setTelNumber] = useState(null);
    const [mail, setMail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [mailContent, setMailContent] = useState(null);

    const mailManager = ()=>{
      const mailBody ={
        name,
        telNumber,
        mail,
        subject,
        mailContent
            };
      fetch("/contactForm", {
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body: JSON.stringify(mailBody),
      })
      .then((res)=>res.json())
      .then((data)=>console.log("form Answer",data))
    };

    return(
        <>
        <Wrapper>
        <Form
        method="POST"
        action="/"
        onSubmit={(ev)=>{
        ev.preventDefault();
        mailManager();
}}>
    <Small>
     
    <Label>Name*</Label>
       <Input
       required
        type="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}/>
      
    <Label>Phone Number</Label>
       <Input
        type="tel"
        value={telNumber}
        onChange={(ev) => setTelNumber(ev.target.value)}/>
    <Label>Email*</Label>
       <Input
       required
        type="mail"
        value={mail}
        onChange={(ev) => setMail(ev.target.value)}/>
    <Label>Subject*</Label>
       <Input
       required
        type="subject"
        value={subject}
        onChange={(ev) => setSubject(ev.target.value)}/>
        </Small>
        <Big>
        <Label>Your Message</Label>
       <TextArea
        value={mailContent}
        onChange={(ev) => setMailContent(ev.target.value)}
        />
        <Button type="submit"><FiSendMess/></Button>
        </Big>
</Form>
        </Wrapper>
        </>
    )
}

export default ContactForm;


const Wrapper = styled.div`
margin-top:25px;
margin-bottom:25px;
color: ${COLORS.red};
/* display:flex;
align-items:center;
justify-content:center; */
`;
const Small = styled.div`
margin: 25px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
@media (max-width:769px){
 
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
`;

const Big = styled.div`
margin:15px;
display:flex;
align-items:flex-start;
justify-content:flex-start;
flex-direction:column;
@media (max-width:769px){
  display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
}
flex-wrap:wrap;
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`;
const Label = styled.label`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`;
const Input = styled.input`
  padding: 5px;
  margin: 3px;
  width: 200px;
  border:none;
  border-bottom: solid 2px ${COLORS.red};
  /* box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06); */
  outline: none;
  /* display:flex;
  flex-wrap:wrap; */
  @media (max-width:769px){
  margin-top:10px;
  margin-bottom:10px;
  width:350px;
}
`;
const TextArea = styled.textarea`
height: 150px;
margin-top:25px;
resize: none;
width: 1150px;
padding: 5px;
margin: 3px;
border: 0;
border-bottom: solid 2px ${COLORS.red};
/* box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06); */
outline: none;
@media (max-width:769px){
 width:360px; 
 margin-top:10px;
margin-bottom:10px;
}
`;
const Button = styled.button`
margin-top:25px;
cursor: pointer;
border-radius:3px;
padding:15px;
font-weight:bold;
color: ${COLORS.red};
width: 200px;
font-size: 15px;
background:none;
border: solid ${COLORS.red} 3px;
transition-property: all;
transition-duration: 0.2s;
transition-timing-function: ease-in;
:hover{
  background-color:#FFFFFF;
font-size: 14px;
  color:${COLORS.red};
}
`;

const FiSendMess = styled(FiSend)`
font-size :20px;
`;
import React from "react";
import { COLORS } from "../Constants";
import styled from "styled-components";

import ContactForm from "./ContactForm";
import OpenDays from "./OpenDays";
import MapBox from "./MapBox";


const Contact = () => {

  return (
    <>
    <Wrapper>
     <H1>Contact</H1>
     <OpenDays/>
     <ContactForm/>
     <MapBox/>
     </Wrapper>
    </>
  );
};

export default Contact;

const H1 = styled.h1`
margin:30px;
color: ${COLORS.red};
font-size:30px;
@media (max-width:769px){
  display:none;
}
`;
const Wrapper= styled.div`
display:flex;
flex-direction:column;
`;

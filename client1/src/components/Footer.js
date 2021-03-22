import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../Constants";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <Wrapper>       
          <Hours>
            <P>Hours</P>
            <ul>
              <Li>Sun-Mon CLOSED</Li>
              <Li>Tue-Sat 12:00-21:00</Li>             
            </ul>
          </Hours>
          <Medias>
              <A href="https://www.instagram.com/restaurantstashcafe/"><FiInstagram /></A>
          <A href="https://www.facebook.com/stashcafemtl/"><FiFacebook /></A>
            {/* <Extension to="/contact">
            <GoLocation />
            </Extension> */}
            <A href="/Contact"><GoLocation/></A>
          </Medias>       
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${COLORS.red};
  font-size: 18px;
  background-color: #FFFDEE;
    margin-top:20px;
    margin-bottom:20px;
  @media (max-width:769px){
    flex-direction: column-reverse;
    justify-content:center;
    align-items:center;
    margin-top:20px;
}
  
  `;

const P = styled.p`
  font-weight: bold;
  margin:3px;

`;
const Hours = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width:769px){
   margin:15px;
    justify-content:center;
    align-items:center;
    margin-bottom:25px;
}

`;

const Li = styled.li`
margin:3px;
`;
const A = styled.a`
  color: ${COLORS.red};
  margin:5px;
`;
const Medias = styled.div`
  display: flex;
  flex-direction: row;
`;

const Extension = styled(Link)`
color:${COLORS.red}
`;


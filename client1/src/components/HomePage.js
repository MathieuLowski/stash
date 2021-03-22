import React, {useEffect} from "react";

import styled from "styled-components";

import Fade from "react-reveal/Fade";
import lawa from "../Assets/lawa.JPG";


//IDEA: MAKE A PICTURE CAROUSEL IN HOMEPAGE (YOU WILL GET THE VIBE OF THE PLACE)

const HomePage = () => {
  useEffect(() => {
    fetch("/home")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
     
      });
  }, []);
  return (
    <>
      <Wrapper>
        <Fade>
          <Button>COMMANDEZ ET RAMASSEZ / ORDER &#38; PICK-UP </Button>
          {/* <HeadPic src={lawa} alt="restaurant panoramic view" /> */}
        </Fade>
  
      </Wrapper>
    </>
  );
};

export default HomePage;

const Wrapper = styled.div`
  font-size: 25px;
  color: black;
  background-image: url(${lawa});
  width: 100%;
  height: 950px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
cursor: pointer;
border-radius:3px;
padding:25px;
color:white;
width: 420px;
font-size: 15px;
background:none;
border: solid white 3px;
transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
:hover{
  background-color:#FFFFFF93;
  border: solid black 3px;
  color:black;
}
@media(max-width:769px){
  width: 200px;
}
`;



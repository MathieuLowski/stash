import React from "react";
import kielbasaPierog from "../Assets/kielbasa.png";
import styled from "styled-components";
import { COLORS } from "../Constants";


const Blog = () => {
  return (
    <>
    <H1>Blog</H1>
      <Wrapper>
        <A>
          <Img src={kielbasaPierog} alt="Pierogi and saussage" />
          <One>
            <Title>A brief history</Title>
            <p>
              Stash Caf&eacute; was founded in the 1970's by a certain
              Stanislaw. The name Stash is a short for Stanislaw. Since it's
              creation the restaurant has always located in the Old Port. It is
              it's second location as the last one go burned down because of a
              fire that has startedq in the neighboor restaurant. The current
              location has been established for the past 30 years. You are
              sitting in a building that was built in 1832. Despite the
              location, we are always able to serve a piece of our true
              motherland on plate so everybody can taste our Polish
              delicassies...
            </p>
          </One>
        </A>
      </Wrapper>
    </>
  );
};

export default Blog;

const Wrapper = styled.div`
  font-size: 55px;
  color: white;
`;

const H1 = styled.h1`
margin:30px;
color: ${COLORS.red};
font-size:30px;
`;
const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const One = styled.div`
  background: #FFFDEE;
  color: black;
  margin: 20px;
  font-size: 20px;
  width: 300px;
`;
const Img = styled.img`
  border-radius: 3px;
  animation: nav-load 300ms ease-in;
  margin: 20px;
  width: 300px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: ${COLORS.red};
  font-family: "Playfair Display", serif;
  margin: 15px;
`;

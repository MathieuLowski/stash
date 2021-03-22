import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../Constants";
import {animateScroll as scroll} from "react-scroll";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Top>
          <Link to="/">
            <Logo onClick={()=>scroll.scrollToTop}>Stash Caf&eacute;</Logo>
          </Link>
        </Top>
        <Buttom>
          <Link to="/menu">
            <Button>Menu</Button>
          </Link>

          <Link to="/blog">
            <Button>Blog</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </Buttom>
      </Wrapper>
    </>
  );
};
export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.div``;
const Logo = styled.button`
  font-family: "Playfair Display", serif;
  margin: 15px;
  font-size: 55px;
  font-weight: bold;
  outline: none;
  border: none;
  color: ${COLORS.red};
  background: none;
cursor: pointer;
`;

const Button = styled.button`
cursor: pointer;
  margin: 15px;
  font-family: "Playfair Display", serif;
  font-size: 30px;
  font-weight: bold;
  outline: none;
  border: none;
  color: ${COLORS.red};
  background: none;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  :hover {
    color: ${COLORS.red}73;
  }
`;

const Buttom = styled.div``;

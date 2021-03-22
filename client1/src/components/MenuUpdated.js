import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";
import BackGroungImg from "../Assets/IMG_1061.jpeg";
import cupidPostCard from "../Assets/cupids_postcard_A.jpg";


import { COLORS } from "../Constants";

import Soups from "./MenuItems/Soups";
import Sandwich from "./MenuItems/Sandwich";
import Entree from "./MenuItems/Entree";
import AlaCarte from "./MenuItems/AlaCarte";
import Desserts from "./MenuItems/Desserts";

const MenuUpdated = () =>{

    return(
        <>
        <H1>Menu</H1>
            <MenuSection>
                <LinkTo to="soups" smooth={true} duration={10}>Soupes</LinkTo>
                <LinkTo to="entree" smooth={true} duration={10}>Entr&eacute;e</LinkTo>
                <LinkTo to="sandwich" smooth={true} duration={10}>Sandwichs</LinkTo>
                <LinkTo to="aLaCarte" smooth={true} duration={10}>&Agrave; la carte</LinkTo>
                <LinkTo to="desserts" smooth={true} duration={10} >Desserts</LinkTo>
</MenuSection>
        <Wrapper>

            <Fade>
            <Soups/>
            <Entree/>
            <Sandwich/>
            <AlaCarte/>
            <Desserts/>
            </Fade>
            </Wrapper></>
    )
}

export default MenuUpdated;

const Wrapper = styled.div`
//background:url(${BackGroungImg});
background:url(${cupidPostCard});
background-attachment: fixed;
width: 100%;
background-size: cover;
`;

const LinkTo = styled(Link)`
cursor: pointer;
color:${COLORS.red};
margin:15px;
@media (max-width:769px){
    margin:15px;
}
`;

const H1 = styled.h1`
margin:30px;
color: ${COLORS.red};
font-size:30px;
@media (max-width:769px){
  display:none;
}
`;

const MenuSection = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
font-size:20px;
@media (max-width:769px){
 flex-direction:column;
}
`;
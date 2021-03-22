import React from "react";
import styled from "styled-components";
import {COLORS} from "../../Constants";
const Soups = () => {
  return (
    <>
      <Wrapper id="soups">
        <Item>
          <H2>BARSCZ - S (5$) L (9$)</H2>
          <P>Consomm&eacute; de betteraves traditionel</P>
          <EN>Traditional beet consommm&eacute;</EN>
        </Item>
        <Item>
          <H2>ZUREK - S (6$) L (10$)</H2>
          <P>
            Soupe aigre &agrave; base de malt de seigle avec petits morceaux de
            saucisse de porc
          </P>
          <EN>Creamy sour rye malt soup with small pieces of porc sausage</EN>
        </Item>
        <Item>
          <H2>FLAKI - S (7$) L (14$)</H2>
          <P>Soupe traditionnelle de tripes de boeuf</P>
          <EN>Old fashioned beef honeycomb tripe soup</EN>
        </Item>
        <Item>
          <H2>ZUPA OGORKOWA - S (7$) L (14$)</H2>
          <P>Soupe aux l&eacute;mes et cornichont &agrave; l'aneth</P>
          <EN>Dill pickle and vegetable soup</EN>
        </Item>
      </Wrapper>
    </>
  );
};

export default Soups;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
  flex-wrap: wrap;
  font-size: 22px;
  @media (max-width:769px){
    margin:60px;
}
`;

const Item = styled.div`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 165px;
  width: 300px;
  @media (max-width:769px){
    width:360px;
    height:220px;
    
}
  
`;
const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top:10px;
  color: ${COLORS.red};
  @media(max-width:769px){
    margin:19px;
  }
`;
const P = styled.p`
  font-size: 17px;
  margin: 10px 10px 0px 10px;
`;
const EN = styled.p`
  font-size: 17px;
  margin: 10px;
  font-style: italic;
  position: relative;
`;

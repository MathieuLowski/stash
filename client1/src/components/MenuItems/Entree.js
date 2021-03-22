import React from "react";
import styled from "styled-components";
import {COLORS} from "../../Constants";

const Entrees = () => {
  return (
    <>
      <Wrapper id="entree">
        <Item>
          <H2>SALATKA - S (6$) L (10$)</H2>
          <P>
            Salade verte avec choux rouge et carottes garnies de notre
            vinaigrette maison.
          </P>
          <EN>
            Green salad with red cabbage and carrots with our house dressing
          </EN>
        </Item>
        <Item>
          <H2>PIEROGI 8$</H2>
          <P>
            Quatres p&acirc;tes farcies de boeuf ou fromage et patate, ou choux
            et champignons
          </P>
          <EN>
            Four dumplings stuffed with beef, or cheese and potato, or cabbage
            and mushrooms
          </EN>
        </Item>
        <Item>
          <H2>KIELBASA 8$</H2>
          <P>Saucisse polonaise de porc saut&eacute; aux oignons</P>
          <EN>Polish porc sausage saut&eacute;ed with onions</EN>
        </Item>
        <Item>
          <H2>SLEDZ 10$</H2>
          <P>
            Hareng marin&eacute; servi avec oignions, pomme et cr&egrave;me
            s&ucirc;re
          </P>
          <EN>Pickled herring served with onions, apple and sour cream</EN>
        </Item>
        <Item>
          <H2>PLACKI 8$</H2>
          <P>
            Quatres cr&egrave;pes de pommes de terre servies avec cr&egrave;me
            s&ucirc;re ou sauce au pommes
          </P>
          <EN>Four potato pancakes served with sour cream or apple sauce</EN>
        </Item>
      </Wrapper>
    </>
  );
};

export default Entrees;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
  flex-wrap: wrap;
  color: black;
  font-size: 22px;
  @media (max-width:769px){
    margin:50px;
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
  height: 170px;
  width: 300px;
  @media (max-width:769px){
    width:360px;
    height:260px;
    
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
  margin: 10px;
`;
const EN = styled.p`
  font-size: 17px;
  margin: 10px;
  font-style: italic;
  position: relative;
`;

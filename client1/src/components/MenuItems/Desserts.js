import React from "react";
import styled from "styled-components";
import {COLORS} from "../../Constants";

const Desserts = () => {
  return (
    <>
      <Wrapper id="desserts">
        <Item>
          <H2>CROUSTADE AUX POMMES - APPLE COBBLER 6$</H2>
          <P>
            Notre fameuse croustade aux pommes servie avec cr&egrave;me
            surcr&eacute;e.
          </P>
          <EN>Our famous apple cobbler served with sweat cream.</EN>
        </Item>
        <Item>
          <H2>NALESNIK 9$</H2>
          <P>
            Cr&ecirc;pe farcie de fromage sucr&eacute; infus&eacute; de vanille,
            servie avec cr&egrave;me sucr&eacute; et coulis aux framboises.
          </P>
          <EN>
            Cr&egrave;pe with vanilla infused sweet cheese, served with sweet
            vream and rasberru coulis.
          </EN>
        </Item>
      </Wrapper>
    </>
  );
};

export default Desserts;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
  flex-wrap: wrap;
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
  height: 200px;
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
    margin:10px;
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

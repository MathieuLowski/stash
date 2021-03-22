import React from "react";
import styled from "styled-components";
import {COLORS} from "../../Constants";

const Sandwich = () => {
  return (
    <>
      <Wrapper id="sandwich">
        <Item>
          <H2>SANDWICH SAUCISSE 13$ </H2>
          <P>
            Sandwich avec saucisse de porc, choucroute, oignons frits, moutarde
            et cornichons, servi avec salade de pomme de terre et boisson
            gazeuse
          </P>
          <EN>
            Pork saussage sandwich with sauerkraut, fried onions, mustard and
            dill pickle served with potato salad and soft drink.
          </EN>
        </Item>
        <Item>
          <H2>SANDWICH POULET 15$ </H2>
          <P>
            Sandwich au poulet pann&eacute; avec chou rougem cornishons, laitue,
            dijon et moyonnaise, servi avec salade de pomme d eterre et boisson
            gazeuse
          </P>
          <EN>
            Chicken schnitzel sandwich with red cabbae, dill picke, lettuce,
            dijon and mayonnaise, served with potato salad and soft drink
          </EN>
        </Item>
        <Item>
          <H2>SANDWICH POISSON 15$ </H2>
          <P>
            Sandwich au filet de sole pan&eacute; avec sauce tartar maison,
            laitue, servi avec salade de pomme de terre et boisson gazeuse
          </P>
          <EN>
            Breades sole sandich with housemade tartar sauce, and lettuce,
            served with potato salad and soft drink
          </EN>
        </Item>
      </Wrapper>
    </>
  );
};

export default Sandwich;

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
  height: 220px;
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

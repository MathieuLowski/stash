import React from "react";
import styled from "styled-components";
import {COLORS} from "../../Constants";


const AlaCarte = () => {
  return (
    <>
      <Wrapper id="aLaCarte">
        <Item>
          <H2>PIEROGI 16$</H2>
          <P>
            Huite p&acirc;tes farcies de boeuf, ou de fromage et patate, ou de
            chou et champignons, servies avec choucroute.
          </P>
          <EN>
            Eight dumplings stuffed with beef or cheese and potato, or with
            cabbage and mushrooms, served with saerkraut.
          </EN>
        </Item>
        <Item>
          <H2>KROKIETY 17$</H2>
          <P>
            Deux cr&egrave;pes pann&eacute;es, farcies au boeuf ou aux
            champignons, servies avec salade verte, salade de pommes de terre,
            et une sauce aux champignons.
          </P>
          <EN>
            Two breaded crepe rolls filled with beef or mushrooms served with
            green salad, potato salad &amp; mushroom sauce.
          </EN>
        </Item>
        <Item>
          <H2>GOLABKI 18$</H2>
          <P>
            Deux feuilles de choux farcies de porc et de riz, servies avec choix
            de salade, pur&eacute;e de patates et sauce au tomates.{" "}
          </P>
          <EN>
            Two cabbage rolls filled with pork and rice, mashed potatoes, choice
            of salad and tomato sauce.
          </EN>
        </Item>
        <Item>
          <H2>KIELBASA 20$</H2>
          <P>
            Deux saucisses de porc servies avec deux choix d'accompagnement et
            dijon.
          </P>
          <EN>Two pork sausages served with choice of sides and dijon.</EN>
        </Item>
        <Item>
          <H2>SZNYCEL WIEDENSKI 25$</H2>
          <P>
            Escalope de veau pann&eacute;e servie avec un oeuf mirroir,
            purr&eacute;e de pomme de terre et choix de salade.
          </P>
          <EN>
            Breaded veal schnitzel served with a sunny-side-up egg, mashed
            potatoes and choice of salad.
          </EN>
        </Item>
        <Item>
          <H2>STROGONOW 25$</H2>
          <P>
            Lani&egrave;re de filet de boeuf dans une sauce infus&eacute;e au
            vin rouge et champignons, servies avec purr&eacute;e de pomme de
            terre et choix de salade.{" "}
          </P>
          <EN>
            Strips of beef filet in a red wine infused mushroom gravy served
            with mashd potatoes and choice of salad.{" "}
          </EN>
        </Item>
        <Item>
          <H2>KOTLET Z DROBIU 20$</H2>
          <P>
            Poitrine de poulet pan&eacute;e, servie avec purr&eacute;e de pomme
            de terre, citron et choix de salade.
          </P>
          <EN>
            Breaded chicken breast served with mashed potatoes, lemon wedge and
            choice of sides.{" "}
          </EN>
        </Item>
        <Item>
          <H2>BIGOS 18$</H2>
          <P>
            Rago&ucirc;t compos&eacute; de chou, de porc r&ocirc;ti, prunes, de
            saucisse de porc et de champignons.
          </P>
          <EN>
            Cabbage stew with roasted pork, plums, pork sausage and mushrooms.{" "}
          </EN>
        </Item>
        <Item>
          <H2>DEBUTANT 25$</H2>
          <P>
            Assiette compos&eacute;e de 4 pierogi, une cr&ecirc;pe de pommes de
            terre, un krokiet et bigos.
          </P>
          <EN>
            Mixed plate of 4 pierogi, one potato pancake, one krokiet and bigos.
          </EN>
        </Item>
        
      </Wrapper>
    </>
  );
};

export default AlaCarte;

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
  height: 240px;
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

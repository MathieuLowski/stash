import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import debutant from "../Assets/debutant.JPG";

import Soups from "./MenuItems/Soups";
import Sandwich from "./MenuItems/Sandwich";
import Entree from "./MenuItems/Entree";
import AlaCarte from "./MenuItems/AlaCarte";
import Desserts from "./MenuItems/Desserts";


const Menu = () => {
  //USE "SLICK" FOR A MENU CAROUSEL WITH STARTERS, MAINS ETC...KENWHEELER.GITHUB.IO/SLICK/
  return (
    <>
      <Wrapper>
        <Fade>
          <Tabs>
            <Categories>
              <Tab>Soupes</Tab>
              <Tab>Entr&eacute;e</Tab>
              <Tab>Sandwichs</Tab>
              <Tab>&Agrave; la carte</Tab>
              <Tab>Desserts</Tab>
            </Categories>

            <TabPanel>
              <Soups />
            </TabPanel>
            <TabPanel>
              <Entree />
            </TabPanel>
            <TabPanel>
              <Sandwich />
            </TabPanel>
            <TabPanel>
              <AlaCarte />
            </TabPanel>
            <TabPanel>
              <Desserts />
            </TabPanel>
          </Tabs>
        </Fade>
      </Wrapper>
     
    </>
  );
};

export default Menu;

const Wrapper = styled.div`
  font-size: 25px;
  color: white;
  background-image: url(${debutant});

 
  width: 800px;

  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Categories = styled(TabList)`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

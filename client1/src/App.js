import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar";
import MenuUpdated from "./components/MenuUpdated";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/menu">
              <MenuUpdated />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </Wrapper>
    </>
  );
}

export default App;
const Wrapper = styled.div`
  background: #FFFDEE;

`;

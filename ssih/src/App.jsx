import React, { Component } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Router, Link } from "@reach/router";

import HomePage from "./homePage";
import StickyHeader from "./stickyHeader";
import Footer from "./footer";
import PreviousWinner from "./previousWinners";
class App extends Component {
  render() {
    return (
      <>
        <StickyHeader />
        <Router>
          <HomePage path="/" />
          <PreviousWinner path="/previous-winner" />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;

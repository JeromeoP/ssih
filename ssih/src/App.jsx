import React, { Component } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Router, Link } from "@reach/router";

import HomePage from "./Components/homePage";
import StickyHeader from "./Components/stickyHeader";
import Footer from "./Components/footer";
import PreviousWinner from "./Components/previousWinners";
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

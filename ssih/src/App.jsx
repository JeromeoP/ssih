import React, { Component } from "react";
import { Box, Flex } from "@chakra-ui/react";
import HomePage from "./homePage";
import StickyHeader from "./stickyHeader";
import Footer from "./footer";
class App extends Component {
  render() {
    return (
      <>
        <StickyHeader />
        <HomePage />
        <Footer />
      </>
    );
  }
}

export default App;

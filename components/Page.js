import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navigation from "./Navigation";

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  body {
    height: 100%
  }
`;

const StyledPage = styled.div`
  background: white;
`;

class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <GlobalStyle />
        <Navigation />
        {this.props.children}
      </StyledPage>
    );
  }
}

export default Page;

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
    height: 100%;
    margin: 0;
  }

`;

const StyledPage = styled.div`
  background: none;
`;

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navigation /> */}
        <StyledPage>
          <GlobalStyle />
          {this.props.children}
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default Page;

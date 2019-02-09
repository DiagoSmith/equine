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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
     }
     p {
       line-height: 1.75;
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

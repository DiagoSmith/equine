import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const StyledPage = styled.div`
  background: white;
`;

class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <Navigation />
        {this.props.children}
      </StyledPage>
    );
  }
}

export default Page;

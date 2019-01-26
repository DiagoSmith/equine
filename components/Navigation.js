import Link from "next/link";
import styled from "styled-components";

//TODO: STYLE HOME AS HOME ICON ON SMALLER SCREEN;
//TODO: ADD NICE FONT
//TODO: DECENT COLORS

const StyledNavLink = styled.a`
  text-decoration: none;
  padding: 14px 16px;
  color: white;
  font-size: 26px;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-grow: 1;
  border-bottom: #efefef 2px solid;
  justify-content: center;
  @media (max-width: 600px) {
    background: palevioletred;
    height: 100px;
    position: fixed;
    bottom: 0;
    transition: bottom 2s;
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Navigation = () => (
  <StyledNavigation>
    <Link href="/">
      <StyledNavLink> Home </StyledNavLink>
    </Link>
    <Link href="/about">
      <StyledNavLink> About </StyledNavLink>
    </Link>
    <Link href="/services">
      <StyledNavLink> Services </StyledNavLink>
    </Link>
    <Link href="/contact">
      <StyledNavLink> Contact </StyledNavLink>
    </Link>
    <Link href="/gallery">
      <StyledNavLink> Gallery </StyledNavLink>
    </Link>
  </StyledNavigation>
);

export default Navigation;

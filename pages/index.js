import styled from "styled-components";

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
    url("static/home.jpg");
  height: 800px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  z-index: -20;
`;

const StyledContainer = styled.section`
  margin: 40px;
  padding: 10px;
`;

const SubHeading = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  color: blueviolet;
`;

const SplashText = styled.h1`
  font-size: 50px;
`;

const CTA = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: white;
  background: green;
  padding: 10px;
  border-radius: 6px;
  border: none;
  &:hover {
    background: white;
    color: black;
  }
`;

const BenefitsSection = styled.section``;

const Home = () => (
  <>
    <Background />
    {/* <StyledContainer> */}
    {/* <SubHeading> HOEMT </SubHeading> */}
    {/* <SplashText style={{ color: "white" }}> */}
    {/* First class Massage Therapy for your horse */}
    {/* </SplashText> */}
    {/* <CTA>Get in Touch</CTA> */}
    {/* </StyledContainer> */}
  </>
);

export default Home;

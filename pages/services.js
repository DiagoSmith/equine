import styled from "styled-components";

const StyledContainer = styled.section`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
`;

const RateCardWrapper = styled.div`
  padding: 40px;
  display: flex;
`;

const RateCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background: #f0f0f0;
  width: 300px;
  text-align: center;
`;

RateCard.Title = styled.h2``;

RateCard.Price = styled.h1``;

RateCard.Description = styled.p``;

const Services = () => (
  <div>
    <StyledContainer>
      <h1> Services </h1>

      <RateCardWrapper>
        <RateCard>
          <RateCard.Title>Initial Consultation</RateCard.Title>
          <RateCard.Price>£35</RateCard.Price>
          <RateCard.Description>
            Baseline heuristic tests for your horse
          </RateCard.Description>
        </RateCard>
        <RateCard>
          <RateCard.Title>Further Visits</RateCard.Title>
          <RateCard.Price>£30</RateCard.Price>
          <RateCard.Description>
            Additional blah blah blah.
          </RateCard.Description>
        </RateCard>
      </RateCardWrapper>
    </StyledContainer>
  </div>
);

export default Services;

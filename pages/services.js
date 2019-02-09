import styled from "styled-components";

const StyledContainer = styled.section`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
`;

const RateCardWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
`;

const RateCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 18px;
  background: #f0f0f0;
  width: 300px;
  text-align: center;
  border-radius: 4px;
  flex-grow: 0;
`;

const PageIntro = styled.section`
  width: 25em;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

RateCard.Title = styled.h2``;

RateCard.Price = styled.h1``;

RateCard.Description = styled.p``;

const Services = () => (
  <div>
    <StyledContainer>
      <h1> Services </h1>
      <Wrapper>
        <PageIntro>
          <p>
            I use a variety of diagnostic tests before starting any sports
            therapy session. These enable me to identify specific areas of
            tension and plan the treatment time accordingly so your horse
            benefits fully. ​ The treatment is tailored to your horses
            individual complaint and I use a range of techniques to ensure your
            horse remains as relaxed as possible, while still releasing any
            muscle tension. A tense horse is much more difficult to treat! ​
            Most sessions end with stretches specific to the tight muscle or
            muscle groups identified. I may suggest a short amount of time off
            work for your horse following the session. This will depend on the
            intensity of the treatment required, but will rarely be more than 2
            days.
          </p>
        </PageIntro>
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
      </Wrapper>
    </StyledContainer>
  </div>
);

export default Services;

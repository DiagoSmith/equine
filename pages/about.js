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

const TextContainer = styled.div`
  flex: 1;
  margin-right: 40px;
`;

const ImageContainer = styled.div`
  height: 800px;
  flex: 1;
  filter: grayscale(100%);
`;

const About = () => (
  <div>
    <StyledContainer>
      <TextContainer>
        <h1> About </h1>
        <h3>
          {" "}
          Horses have been a huge part of my life since I was 5 years old.
        </h3>
        <p>
          I started weekly riding lessons at my local riding school, and from
          then my love for horses grew. I was 10 years old when my parents
          bought my my first pony, whom I still own. Over the years, I have been
          fortunate enough to have owned a variety of different horses. In my
          younger years, I spent a lot of time show jumping at a local level. I
          always knew I wanted to work with horses, so after school I decided to
          study Equine Management at Bishop Burton College. It was during
          college that we bought Basil, my 16.2hh Dutch Warmblood, who gave me a
          new love for Dressage. Basil also took me round my first affiliated
          show jumping course. After a few years of only being around my own
          horses, I decided I wanted to work with horses again, as it had always
          been my passion, and this is when I decided to look into Equine
          Massage Therapy. I am now a fully qualified Equine Sports Massage
          Therapist, and I aim to study Equine Physiotherapy in the near future
          also, to expand my knowledge. There is nothing more rewarding to me,
          than knowing I can help improve a horses well-being.
        </p>
      </TextContainer>
      <ImageContainer>
        <img src="static/about.jpg" width="100%" />
      </ImageContainer>
    </StyledContainer>
  </div>
);

export default About;

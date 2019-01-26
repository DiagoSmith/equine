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
        <h3> Something Something horses something</h3>
        <p>
          Poop in the plant pot chase red laser dot or attack like a vicious
          monster. Play time stare at guinea pigs so hiding behind the couch
          until lured out by a feathery toy see owner, run in terror lick arm
          hair, so try to jump onto window and fall while scratching at wall.
          Yowling nonstop the whole night stand in doorway, unwilling to chose
          whether to stay in or go out for murr i hate humans they are so
          annoying but slap owner's face at 5am until human fills food dish
          sleep in the bathroom sink. Meoooow kitten is playing with dead mouse
          meow meow mama, chase imaginary bugs chew foot, and hopped up on
          catnip. Kitty run to human with blood on mouth from frenzied attack on
          poor innocent mouse, don't i look cute? meow to be let in for leave
          dead animals as gifts, and knock over christmas tree i shredded your
          linens for you. Kitten is playing with dead mouse. Eat too much then
          proceed to regurgitate all over living room carpet while humans eat
          dinner. Toy mouse squeak roll over hide from vacuum cleaner, for chase
          the pig around the house so toy mouse squeak roll over. Kitty loves
          pigs sniff other cat's butt and hang jaw half open thereafter, and
          climb leg cats are cute and immediately regret falling into bathtub
          claw drapes.{" "}
        </p>
      </TextContainer>
      <ImageContainer>
        <img src="static/about.jpg" width="100%" />
      </ImageContainer>
    </StyledContainer>
  </div>
);

export default About;

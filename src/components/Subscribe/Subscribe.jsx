import Section from "../Section";
import SubscribeForm from "../SubscribeForm";
import { Image, Info, InfoWrapper, Title, Wrapper } from "./Subscribe.styled";
import astro from "../../styles/images/astronaut.jpg";

const Subscribe = () => {
  return (
    <Section>
      <Wrapper>
        <Image src={astro} alt="astronaut" />
        <InfoWrapper>
          <Title>Join our weekly digest</Title>
          <Info>
            Get exclusive promotions & updates straight to your inbox.
          </Info>
          <SubscribeForm />
        </InfoWrapper>
      </Wrapper>
    </Section>
  );
};

export default Subscribe;

import { BsRocketTakeoff } from "react-icons/bs";
import { useMediaQuery } from "@mui/material";
import Section from "../Section";
import ButtonMain from "../Buttons/ButtonMain";
import {
  HeroWrapper,
  Item,
  List,
  Name,
  Number,
  Wrapper,
  Title,
  MainCard,
  MainImage,
  CardTitle,
  Author,
  Desc,
} from "./Hero.styled";
import image from "../../styles/images/heroImage.jpg";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Section>
      <HeroWrapper>
        {!isMobile ? (
          <>
            <Wrapper>
              <Title>Discover digital art & Collect NFTs</Title>
              <Desc>
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </Desc>
              <ButtonMain text="Get Started" icon={<BsRocketTakeoff />} />
              <List>
                <Item>
                  <Number>240k+</Number>
                  <Name>Total Sale</Name>
                </Item>
                <Item>
                  <Number>100k+</Number>
                  <Name>Auctions</Name>
                </Item>
                <Item>
                  <Number>240k+</Number>
                  <Name>Artists</Name>
                </Item>
              </List>
            </Wrapper>
            <MainCard>
              <MainImage src={image} alt="artwork" width="100%" height="100%" />
              <CardTitle> Space Walking</CardTitle>
              <Author>Animakid</Author>
            </MainCard>
          </>
        ) : (
          <Wrapper>
            <Title>Discover digital art & Collect NFTs</Title>
            <Desc>
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </Desc>
            <MainCard>
              <MainImage src={image} alt="artwork" width="100%" height="100%" />
              <CardTitle> Space Walking</CardTitle>
              <Author>Animakid</Author>
            </MainCard>
            <ButtonMain text="Get Started" icon={<BsRocketTakeoff />} />
            <List>
              <Item>
                <Number>240k+</Number>
                <Name>Total Sale</Name>
              </Item>
              <Item>
                <Number>100k+</Number>
                <Name>Auctions</Name>
              </Item>
              <Item>
                <Number>240k+</Number>
                <Name>Artists</Name>
              </Item>
            </List>
          </Wrapper>
        )}
      </HeroWrapper>
    </Section>
  );
};

export default Hero;

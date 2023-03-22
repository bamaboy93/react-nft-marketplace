import { Typography } from "@mui/material";
import { BsRocketTakeoff } from "react-icons/bs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
  SemiTitle,
} from "./Hero.styled";
import image from "../../styles/images/heroImage.jpg";

const Hero = () => {
  return (
    <Section>
      <HeroWrapper>
        <Wrapper>
          <Title variant="h1">Discover digital art & Collect NFTs</Title>
          <SemiTitle variant="h5">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </SemiTitle>
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
        <Card sx={{ width: 510 }}>
          <CardMedia component="img" height="410" image={image} alt="artwork" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontWeight="bold"
              component="div"
            >
              Space Walking
            </Typography>
            <Typography variant="body1">Animakid</Typography>
          </CardContent>
        </Card>
      </HeroWrapper>
    </Section>
  );
};

export default Hero;

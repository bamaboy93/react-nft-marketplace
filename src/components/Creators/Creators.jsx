import { AiTwotoneStar } from "react-icons/ai";
import { useMediaQuery } from "@mui/material";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import { creators } from "../../data/data";
import { Item, Grid, Title, TitleAccent } from "./Creators.styled";

const Creators = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Section>
      <SectionTitle
        title="Top creators"
        text="Checkout Top Rated Creators on the NFT Marketplace"
      >
        {!isMobile && (
          <ButtonSecondary text="View Rankings" icon={<AiTwotoneStar />} />
        )}
      </SectionTitle>

      <Grid>
        {creators.map((creator) => (
          <Item key={creator.name}>
            <img src={creator.avatar} alt="avatar" width="120" height="120" />
            <Title>{creator.name}</Title>
            <Title>
              Total Sales: <TitleAccent>{creator.amount} ETH</TitleAccent>
            </Title>
          </Item>
        ))}
      </Grid>
      {isMobile && (
        <ButtonSecondary
          text="View Rankings"
          icon={<AiTwotoneStar />}
          width={"100%"}
        />
      )}
    </Section>
  );
};

export default Creators;

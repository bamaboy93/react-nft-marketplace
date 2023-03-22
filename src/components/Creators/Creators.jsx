import { AiTwotoneStar } from "react-icons/ai";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ButtonSecondary from "../Buttons/ButtonSecondary";

const Creators = () => {
  return (
    <Section>
      <SectionTitle
        title="Top creators"
        text="Checkout Top Rated Creators on the NFT Marketplace"
      >
        <ButtonSecondary text="View Rankings" icon={<AiTwotoneStar />} />
      </SectionTitle>
    </Section>
  );
};

export default Creators;

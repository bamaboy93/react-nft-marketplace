import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Container from "../Container";
import SearchForm from "./SearchForm";

const MarketplaceHeader = () => {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Browse Marketplace"
          text="Browse through more than 50k NFTs on the NFT Marketplace."
        />
        <SearchForm />
      </Container>
    </Section>
  );
};

export default MarketplaceHeader;

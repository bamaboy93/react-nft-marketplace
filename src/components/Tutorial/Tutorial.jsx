import Section from "../Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Item, ItemDesc, ItemTitle, List } from "./Tutorial.styled";
import wallet from "../../styles/images/wallet.png";
import folder from "../../styles/images/collection.png";
import cart from "../../styles/images/cart.png";

const Tutorial = () => {
  return (
    <Section>
      <SectionTitle
        title="How it works"
        text="Find out how to get started"
      ></SectionTitle>
      <List>
        <Item>
          <img src={wallet} alt="wallet" width="250" heigth="250" />
          <ItemTitle>Setup Your wallet</ItemTitle>
          <ItemDesc>
            Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner.
          </ItemDesc>
        </Item>
        <Item>
          <img src={folder} alt="collection folder" width="250" heigth="250" />
          <ItemTitle>Create Collection</ItemTitle>
          <ItemDesc>
            Upload your work and setup your collection. Add a description,
            social links and floor price.
          </ItemDesc>
        </Item>
        <Item>
          <img src={cart} alt="cart" width="250" heigth="250" />
          <ItemTitle>Start Earning</ItemTitle>
          <ItemDesc>
            Choose between auctions and fixed-price listings. Start earning by
            selling your NFTs or trading others.
          </ItemDesc>
        </Item>
      </List>
    </Section>
  );
};

export default Tutorial;

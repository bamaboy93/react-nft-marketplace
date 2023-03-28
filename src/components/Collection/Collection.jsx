import Section from "../Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import { collection } from "../../data/data";
import {
  CollectionWrapper,
  Instance,
  Item,
  List,
  Image,
  CollectionName,
  Author,
  AuthorName,
} from "./Collection.styled";

const Collection = () => {
  return (
    <Section>
      <SectionTitle
        title="Trending Collection"
        text="Checkout our weekly updated trending collection."
      ></SectionTitle>
      <CollectionWrapper>
        {collection.map(({ author, images, mainImage, name }) => (
          <Instance key={author.name}>
            <Image src={mainImage} alt="artwork" />
            <List>
              {images.map((image) => (
                <Item key={image.url}>
                  <Image src={image.url} alt="artwork" />
                </Item>
              ))}
              <Item>...</Item>
            </List>
            <CollectionName variant="h5">{name}</CollectionName>
            <Author>
              <img src={author.avatar} alt="avatar" />
              <AuthorName>{author.name}</AuthorName>
            </Author>
          </Instance>
        ))}
      </CollectionWrapper>
    </Section>
  );
};

export default Collection;

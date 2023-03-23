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
            <Image src={mainImage} alt="artwork" width="330" heigth="330" />
            <List>
              {images.map((image) => (
                <li key={image.url}>
                  <Image
                    src={image.url}
                    alt="artwork"
                    width="100"
                    heigth="100"
                  />
                </li>
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

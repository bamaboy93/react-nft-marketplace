import Timer from "../Timer";
import Container from "../Container";
import {
  Author,
  Box,
  Info,
  InfoWrapper,
  Link,
  Name,
  Wrapper,
} from "./Highlight.styled";

const Highlight = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000);

  return (
    <Wrapper>
      <Container>
        <InfoWrapper>
          <Info>
            <Box>
              <Author>Shroomie</Author>
            </Box>
            <Name>Magic Mashrooms</Name>
            <Link to="/">See NFT</Link>
          </Info>
          <Timer expiryTimestamp={time} />
        </InfoWrapper>
      </Container>
    </Wrapper>
  );
};

export default Highlight;

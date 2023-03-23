import {
  FaStore,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Container from "../Container";
import SubscribeForm from "../SubscribeForm";
import {
  FooterWrapper,
  Info,
  Wrapper,
  Logo,
  LogoText,
  Desc,
  SocialList,
  SocialLink,
  SocialListItem,
  Explore,
  Title,
  Item,
  Link,
  Sub,
  Total,
  Rights,
} from "./Footer.styled";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FaDiscord />, href: "/" },
    { id: 2, icon: <FaYoutube />, href: "/" },
    { id: 3, icon: <FaTwitter />, href: "/" },
    { id: 4, icon: <FaInstagram />, href: "/" },
  ];
  const links = [
    { href: "/marketplace", text: "Marketplace" },
    { href: "/rankings", text: "Rankings" },
    { href: "/connect", text: "Connect a wallet" },
  ];

  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Info>
            <Logo href="/">
              <FaStore />
              <LogoText>NFT Marketplace</LogoText>
            </Logo>
            <Desc>NFT marketplace UI created with Anima for Figma.</Desc>
            <Desc>Join our community :</Desc>
            <SocialList>
              {socials.map(({ icon, href, id }) => (
                <SocialListItem key={id}>
                  <SocialLink href={href}>{icon}</SocialLink>
                </SocialListItem>
              ))}
            </SocialList>
          </Info>
          <Explore>
            <Title>Explore</Title>
            <ul>
              {links.map(({ href, text }) => (
                <Item key={href}>
                  <Link to={href}>{text}</Link>
                </Item>
              ))}
            </ul>
          </Explore>
          <Sub>
            <Title>Join our weekly digest</Title>
            <Desc>
              Get exclusive promotions & updates straight to your inbox.
            </Desc>
            <SubscribeForm />
          </Sub>
        </Wrapper>
        <Total>
          <Rights>Ⓒ NFT Market. 2023</Rights>
        </Total>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

import { FaStore } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, Logo, LogoText, Navbar, NavLinks } from "./AppBar.styled";
import ButtonMain from "../Buttons/ButtonMain";
import MobileMenu from "../MobileMenu/MobileMenu";

const AppBar = () => {
  const isNotDesktop = useMediaQuery("(max-width:1200px)");
  const links = [
    { href: "/marketplace", text: "Marketplace" },
    { href: "/rankings", text: "Rankings" },
    { href: "/connect", text: "Connect a wallet" },
  ];

  return (
    <Navbar>
      <Logo href="/">
        <FaStore />
        <LogoText>NFT Marketplace</LogoText>
      </Logo>
      {isNotDesktop ? (
        <MobileMenu />
      ) : (
        <NavLinks>
          {links.map(({ href, text }) => (
            <Link key={href} to={href}>
              {text}
            </Link>
          ))}
          <ButtonMain text="Sign Up" icon={<AiOutlineUser />} />
        </NavLinks>
      )}
    </Navbar>
  );
};

export default AppBar;

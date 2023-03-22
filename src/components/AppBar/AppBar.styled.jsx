import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export const LogoText = styled.p`
  margin-left: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.heading};
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin-left: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.l};
  line-height: ${(props) => props.theme.lineHeights.heading};
`;

export const Link = styled(NavLink)`
  margin-right: ${(props) => props.theme.space[3]}px;
  padding: 12px 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.white};
  transition: scale 250ms ease-out;

  &:hover {
    scale: 0.95;
  }
`;

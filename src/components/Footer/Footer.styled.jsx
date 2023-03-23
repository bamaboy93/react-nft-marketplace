import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  padding: 40px 0;
  background-color: ${(props) => props.theme.colors.background.light};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space[10]}px;
`;

export const Info = styled.div`
  width: 250px;
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

export const Desc = styled.p`
  margin-top: ${(props) => props.theme.space[3]}px;
  margin-bottom: ${(props) => props.theme.space[5]}px;
  color: ${(props) => props.theme.colors.grey};
`;

export const SocialList = styled.ul`
  display: flex;
`;

export const SocialListItem = styled.li`
  :not(:last-child) {
    margin-right: ${(props) => props.theme.space[6]}px;
  }
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.grey};

  svg {
    fill: currentColor;
    width: 28px;
    height: 28px;
    transition: fill 250ms ease-in;
  }

  :hover svg {
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export const Explore = styled.div``;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[6]}px;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.m};
  line-height: ${(props) => props.theme.lineHeights.heading};
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[5]}px;
  }
`;

export const Link = styled(NavLink)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
  color: ${(props) => props.theme.colors.white};

  :hover {
    text-decoration: underline;
  }
`;

export const Sub = styled.div`
  width: 430px;
`;

export const Total = styled.div`
  padding-top: ${(props) => props.theme.space[3]}px;
  border-top: 1px solid #858584;
`;

export const Rights = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.grey};
`;

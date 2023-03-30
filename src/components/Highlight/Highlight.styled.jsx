import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  background-image: url(https://simp6.jpg.church/images/layer.jpg);
  background-size: cover;
  background-position: center;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    height: 700px;
    background-size: contain;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%);
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  z-index: 999;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    top: 50%;
    left: 30%;
    transform: translate(-30%, -50%);
  }
  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    width: 560px;

    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -10%);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 750px;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 1050px;
  }
`;

export const Info = styled.div``;

export const Box = styled.div`
  width: 150px;
  padding: 10px 20px;
  background: #3b3b3b;
  border-radius: 20px;
  margin-bottom: ${(props) => props.theme.space[4]}px;
`;

export const Author = styled.p``;

export const Name = styled.h3`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin-bottom: ${(props) => props.theme.space[8]}px;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  width: 100px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.accent};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  transition: ${(props) => props.theme.animation.main};

  :hover {
    background-color: ${(props) => props.theme.colors.background.light};
    color: ${(props) => props.theme.colors.white};
  }
`;

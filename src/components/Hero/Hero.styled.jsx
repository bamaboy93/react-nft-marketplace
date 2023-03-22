import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 610px;
`;

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
}));

export const SemiTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
}));

export const List = styled.ul`
  display: flex;
  margin-top: ${(props) => props.theme.space[7]}px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${(props) => props.theme.space[7]}px;
  }
`;

export const Number = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

export const Name = styled.p`
  font-size: ${(props) => props.theme.fontSizes.m};
  color: ${(props) => props.theme.colors.accent};
`;

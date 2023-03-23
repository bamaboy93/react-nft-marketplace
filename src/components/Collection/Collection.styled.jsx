import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const CollectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Instance = styled.div``;

export const Image = styled.img`
  display: block;
  border-radius: 20px;
  transition: scale 250ms ease-out;

  :hover {
    scale: 0.95;
  }
`;

export const List = styled.ul`
  margin-top: ${(props) => props.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.accent};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};
`;

export const CollectionName = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontWeight: "bold",
}));

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.space[2]}px;
`;

export const AuthorName = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

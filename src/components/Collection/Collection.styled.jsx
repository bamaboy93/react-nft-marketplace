import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const CollectionWrapper = styled.div`
  display: grid;
  grid-row-gap: 40px;
  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
`;

export const Instance = styled.div``;

export const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
  transition: transform 250ms ease-out;

  :hover {
    transform: scale(0.95);
  }
`;

export const List = styled.ul`
  margin-top: ${(props) => props.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoint.sm}) {
    justify-content: space-evenly;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.accent};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.s};

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 100px;
    height: 100px;
  }
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

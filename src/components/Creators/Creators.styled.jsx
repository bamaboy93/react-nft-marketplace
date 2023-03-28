import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: ${(props) => props.theme.space[8]}px;
  }
`;

export const Item = styled.li`
  text-align: center;
  padding: ${(props) => props.theme.space[4]}px;
  background-color: ${(props) => props.theme.colors.background.light};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: transform 250ms ease-out;
  cursor: pointer;

  :hover {
    transform: scale(0.95);
  }
`;

export const Title = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: "bold",
}));

export const TitleAccent = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

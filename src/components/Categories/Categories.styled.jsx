import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
`;

export const CollectionName = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontWeight: "bold",
}));

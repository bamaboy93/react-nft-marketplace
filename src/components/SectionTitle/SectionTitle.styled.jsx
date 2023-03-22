import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.space[10]}px;
`;

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: "bold",
}));

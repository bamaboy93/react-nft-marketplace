import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";

export const NftCard = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));

export const Name = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: "bold",
}));

export const PriceBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: "flex",
}));

export const Price = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontWeight: "bold",
}));

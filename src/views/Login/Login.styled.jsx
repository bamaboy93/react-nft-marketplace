import styled from "@emotion/styled";
import { Typography, Grid, Box } from "@mui/material";
import placeholder from "../../styles/images/registerPlaceholder.jpg";

export const Main = styled(Grid)({
  height: "100%",
});

export const PlaceholderGrid = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${placeholder})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: 250,
  [theme.breakpoints.up("sm")]: {
    height: "100%",
  },
}));

export const FormWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "32px 40px 0 40px",

  [theme.breakpoints.up("lg")]: {
    padding: "80px 80px 0 80px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  [theme.breakpoints.up("md")]: {
    fontSize: "38px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "51px",
  },
}));

export const Desc = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.secondary.main,
  [theme.breakpoints.up("lg")]: {
    fontSize: "22px",
  },
}));

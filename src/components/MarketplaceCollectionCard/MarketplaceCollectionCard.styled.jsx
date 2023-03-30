import styled from "@emotion/styled";
import { Card, IconButton } from "@mui/material";

export const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  color: theme.palette.primary.light,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CollectionCard = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));

export const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.light,
}));

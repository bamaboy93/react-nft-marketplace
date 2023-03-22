import { Box, Typography } from "@mui/material";
import { Title, Wrapper } from "./SectionTitle.styled";

const SectionTitle = ({ title, text, children }) => {
  return (
    <Wrapper>
      <Box>
        <Title variant="h3">{title}</Title>
        <Typography variant="h5">{text}</Typography>
      </Box>
      {children}
    </Wrapper>
  );
};

export default SectionTitle;

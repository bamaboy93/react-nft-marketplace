import { Box, Grid } from "@mui/material";

export default function MarketplaceGrid({ children }) {
  return (
    <Box sx={{ width: 1 }}>
      <Grid container spacing={4}>
        {children}
      </Grid>
    </Box>
  );
}

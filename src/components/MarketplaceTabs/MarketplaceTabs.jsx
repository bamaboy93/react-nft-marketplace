import { useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import Container from "../Container";
import MarketplaceGrid from "../MarketplaceGrid";
import MarketplaceNftCard from "../MarketplaceNftCard";
import MarketplaceCollectionCard from "../MarketplaceCollectionCard";
import { data } from "../../data/marketplace";
import { collection } from "../../data/data";

const MarketplaceTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderTop: 1, borderColor: "primary.light" }}>
      <Container>
        <Box sx={{ width: 1, mb: 5 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="fullwidth tabs "
          >
            <Tab label="NFTs" {...a11yProps(0)} />
            <Tab label="Collections" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <MarketplaceGrid>
              {data.map((values) => (
                <Grid key={values.name} item xs={12} sm={6} lg={4}>
                  <MarketplaceNftCard data={values} />
                </Grid>
              ))}
            </MarketplaceGrid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MarketplaceGrid>
              {collection.map((values) => (
                <Grid key={values.name} item xs={12} sm={6} lg={4}>
                  <MarketplaceCollectionCard data={values} />
                </Grid>
              ))}
            </MarketplaceGrid>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};

export default MarketplaceTabs;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 5 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

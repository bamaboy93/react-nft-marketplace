import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Section from "../Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Grid } from "./Categories.styled";
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <Section>
      <SectionTitle title="Browse Categories"></SectionTitle>
      <Grid>
        {categories.map((category) => (
          <Card key={category.name}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={category.image}
                alt="artwork"
              />
              <CardContent>
                <Typography gutterBottom component="div" fontWeight="bold">
                  {category.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Categories;

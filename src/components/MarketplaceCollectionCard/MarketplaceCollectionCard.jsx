import { useState } from "react";
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Checkbox,
  Collapse,
  Avatar,
  Typography,
} from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  ExpandMore,
} from "@mui/icons-material";
import {
  CollectionCard,
  ExpandMoreButton,
} from "./MarketplaceCollectionCard.styled";

export default function MarketplaceCollectionCard({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CollectionCard>
      <CardHeader
        avatar={<Avatar src={data.author.avatar} alt="user" />}
        title={data.author.name}
      />
      <CardMedia
        component="img"
        height="400"
        image={data.mainImage}
        alt="artwork"
      />
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {data.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          color="secondary"
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          color="secondary"
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
        />
        <ExpandMoreButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMoreButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About:</Typography>

          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            asperiores eligendi distinctio ducimus ipsum, fugit ullam a, quia
            esse aspernatur perferendis? Velit aliquid nesciunt, soluta
            inventore provident officia sequi dolor debitis amet nihil deserunt.
            Veritatis impedit incidunt minus sit enim.
          </Typography>
        </CardContent>
      </Collapse>
    </CollectionCard>
  );
}

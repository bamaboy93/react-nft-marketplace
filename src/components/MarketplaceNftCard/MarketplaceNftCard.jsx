import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Name, PriceBox, Price, NftCard } from "./MarketplaceNftCard.styled";

export default function MarketplaceNftCard({ data }) {
  return (
    <NftCard>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="nft artwork"
          height="300"
          image={data.image}
        />
        <CardContent>
          <Name gutterBottom variant="h5" component="div">
            {data.name}
          </Name>
          <Typography variant="body2">{data.author}</Typography>
          <PriceBox>
            <Typography variant="body2" color="primary.light">
              Price:
            </Typography>
            <Price variant="body2">{data.price} ETH</Price>
          </PriceBox>
        </CardContent>
      </CardActionArea>
    </NftCard>
  );
}

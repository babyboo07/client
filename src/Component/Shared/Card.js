import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { videoList } from "../../apis/youtube";

function CardYoutube() {
  const [video, setVideo] = useState();




  return (
    <div className="ms-1">
      <Link className="text-decoration-none" href="/share">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="/share">
              Share
            </Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
}

export default CardYoutube;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { videoList } from "../../apis/youtube";
import listvideo from "../Mock/Listvideo";

function CardYoutube() {
  const [video, setVideo] = useState([]);
  const [offset, setOffset] = useState(20);
  const key = "AIzaSyCgEt73YSvaf7t-ZzQEfQEXfa2Q0e9UlCI";
  // const [newVideo, setNewVideo] = useState([]);

  const loadMoreVideo = async () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${offset}&q=surfing&videoType=any&key=${key}`
      )
      .then((result) => {
        if (result.status === 200) {
          setVideo([...video, ...result.data.items]);
        }else{
          setVideo([listvideo.items]);
        }
      });
    setOffset(offset+ 10);
  };

  console.log(video);

  const handleSroll = (e) => {
    console.log(e.target.documentElement.scrollTop);
    console.log(window.innerHeight);
    console.log(e.target.documentElement.scrollHeight);

    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      // loadMoreVideo();
    }
  };

  useEffect(() => {
    // loadMoreVideo();
    window.addEventListener("scroll", handleSroll);
  }, []);

  return (
    <Grid container spacing={1} className="ps-5">
      {listvideo.items.map(( p , index) => (
        <Grid item key={index}>
          <div className="ms-1">
            <Link className="text-decoration-none" href={`/+`}>
              <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.snippet.thumbnails.high.url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      style={{
                        whiteSpace: " nowrap",
                        width: "340px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {p.snippet.title}
                    </Typography>
                    <Typography className="mt-0" variant="body1">
                      {p.snippet.channelTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.snippet.publishedAt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardYoutube;

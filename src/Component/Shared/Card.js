import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

function CardYoutube(props) {
  const { videos, fetchMoreData, hasMore } = props;

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
    >
      <Grid container spacing={1} className="ps-5">
        {videos.map((p, index) => (
          <Grid item key={index}>
            <div className="ms-1">
              <Link className="text-decoration-none" href={`/`}>
                <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="iframe"
                      height="200"
                      src={`https://www.youtube.com/embed/${p.videoID}`}
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
                        {p.title}
                      </Typography>
                      <div className="row ">
                        <div className="col-7">
                          <Typography className="mt-0" variant="body1">
                            {p.channelTitle}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {moment(p.publishedAt).format("MMM-DD-YYYY")}
                          </Typography>
                        </div>
                        <div className="col-5 ">
                          <Typography variant="body2" className="text-end">
                            {p.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} views
                          </Typography>
                          <Typography variant="body2" className="text-end">
                            {p.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} like
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}

export default CardYoutube;

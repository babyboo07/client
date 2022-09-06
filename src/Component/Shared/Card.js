import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
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
      loader={<h4 className="text-center">Loading...</h4>}
    >
      <div className="mx-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {videos.map((p, index) => (
            <div key={index} className="ml-1">
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
                          whiteSpace: "nowrap",
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
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <p className="mt-0">
                            {p.channelTitle}
                          </p>
                          <p variant="body2" color="text.secondary">
                            {moment(p.publishedAt).format("MMM-DD-YYYY")}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="text-right">
                            {p.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} views
                          </p>
                          <p className="text-right">
                            {p.likeCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} like
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default CardYoutube;

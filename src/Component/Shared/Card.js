import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

function CardYoutube(props) {
  const { videos, fetchMoreData, hasMore } = props;
  const convertToInternationalCurrencySystem = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(0) + "K"
      : Math.abs(Number(labelValue));
  };

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
                  <Typography className="truncate" gutterBottom variant="h6" component="div">
                    {p.title}
                  </Typography>
                  <div>
                    <div className="pt-1">
                      <span className="mt-0 truncate">{p.channelTitle}</span>
                    </div>
                    <div>
                      <span>{convertToInternationalCurrencySystem(p.viewCount)} views</span>{" "}&bull;{" "}
                      <span>{moment(p.publishedAt).fromNow()}</span>
                    </div>
                    <div className="flex justify-between ">
                      <span>{p.createdBy?.username}</span>
                      <span>{convertToInternationalCurrencySystem(p.likeCount)} like</span>
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

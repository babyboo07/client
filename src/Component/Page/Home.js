import { Fab } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Header from "../Layout/Header";
import { Box } from "@mui/system";
import CardYoutube from "../Shared/Card";
import { useEffect, useState } from "react";
// import listVideos from"../Mock/Listvideo";
import { getListVideos } from "../../Hook/useMongoose";

function Home() {
  const [videos, setVideos] = useState([]);
  const [listVideos, setListVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchListVideo();
  }, []);

  const handleSearch = (searchQuery) => {
    const res = listVideos.filter((items) =>
      items.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(res);
    setVideos(res);
  };

  const fetchMoreData = () => {
    if (videos.length === listVideos.length) {
      setHasMore(false);
    }
    setVideos(videos.concat(listVideos.slice(videos.length, videos.length + 10)));
  };

  const fetchListVideo = async () => {
    const res = await getListVideos();
    setListVideos(res);
    setVideos(res.slice(0, 11));
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <div className="pt-2 ps-2">
            <Fab variant="extended" size="small" color="default">
              All
            </Fab>
            <Fab className="ms-2" variant="extended" size="small" color="default">
              <FastfoodIcon sx={{ mr: 1 }} />
              Food
            </Fab>
            <Fab className="ms-2" variant="extended" size="small" color="default">
              <VideogameAssetIcon sx={{ mr: 1 }} />
              Game
            </Fab>
            <Fab className="ms-2" variant="extended" size="small" color="default">
              <MusicNoteIcon sx={{ mr: 1 }} />
              Music
            </Fab>
          </div>
        </Box>
        <hr />
        <CardYoutube videos={videos} fetchMoreData={fetchMoreData} hasMore={hasMore} />
      </div>
    </>
  );
}

export default Home;

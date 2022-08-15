import { Fab} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Header from "../Layout/Header";
import { Box } from "@mui/system";
import CardYoutube from "../Shared/Card";
import { useEffect, useState } from "react";
import listVideos from "../Mock/Listvideo";

function Home() {
  const [videos,setVideos] = useState(listVideos.slice(0,15));
  const [hasMore,setHasMore] = useState(true);

  const handleSearch = (searchQuery) => {
    const res = listVideos.filter(items=>items.snippet.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setVideos(res);
  };

  const fetchMoreData = () => {
    setVideos(videos.concat(listVideos.slice(videos.length, videos.length +15)));
  };

  useEffect(()=>{
    if(videos.length == listVideos.length){
      setHasMore(false);
    }
  },[videos])

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
        <CardYoutube videos={videos} fetchMoreData={fetchMoreData}  hasMore={hasMore}/>
      </div>
    </>
  );
}

export default Home;

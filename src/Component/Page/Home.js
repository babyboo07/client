import { Chip } from "@mui/material";
import Header from "../Layout/Header";
import { Box } from "@mui/system";
import CardYoutube from "../Shared/Card";
import { useEffect, useState } from "react";
// import listVideos from"../Mock/Listvideo";
import { getListVideos, getlListCategory, searchByCategory, searchByName } from "../../Hook/useMongoose";

function Home() {
  const [videos, setVideos] = useState([]);
  const [listVideos, setListVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [listCate, setListCate] = useState([]);
  const [active, setActive] = useState({ CateID: "" });

  useEffect(() => {
    fetchListVideo();
    fetchListCate();
  }, []);

  const handleSearch = async (searchQuery) => {
    const res = await searchByName(searchQuery);
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

  const fetchListCate = async () => {
    const res = await getlListCategory();
    setListCate(res);
  };

  const handleSearchCategory = async (p) => {
    setActive({ CateID: p.CateID });
    const res = await searchByCategory(p.CateID);
    setVideos(res);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <div className="pt-2 ps-2">
            {listCate.map((p) => (
              <Chip
                key={p.CateID}
                variant={active.CateID === p.CateID ? "contained" : "outlined"}
                className="ms-1 mt-2 "
                onClick={() => handleSearchCategory(p)}
                size="medium"
                style={{
                  backgroundColor: active.CateID === p.CateID ? "black" : "",
                  color: active.CateID === p.CateID ? "#fff" : "#000",
                }}
                label={p.CateName}
              />
            ))}
          </div>
        </Box>
        <hr />
        <CardYoutube videos={videos} fetchMoreData={fetchMoreData} hasMore={hasMore} />
      </div>
    </>
  );
}

export default Home;

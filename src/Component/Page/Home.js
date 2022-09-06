import Header from "../Layout/Header";
import CardYoutube from "../Shared/Card";
import { useEffect, useState } from "react";
// import listVideos from"../Mock/Listvideo";
import {
  getListVideos,
  getlListCategory,
  searchByCategory,
  searchByName,
} from "../../Hook/useMongoose";

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
        <div className="pt-2 px-2">
          {listCate.map((p) => (
            <button
              key={p.CateID}
              className={
                active.CateID === p.CateID
                  ? "bg-gray-900 text-white mt-2 mr-1 p-1 border rounded-2xl"
                  : "bg-white text-gray-900 mt-2 ml-1 p-1 border rounded-2xl"
              }
              onClick={() => handleSearchCategory(p)}
            >
              {p.CateName}
            </button>
          ))}
        </div>
        <hr />
        <CardYoutube videos={videos} fetchMoreData={fetchMoreData} hasMore={hasMore} />
      </div>
    </>
  );
}

export default Home;

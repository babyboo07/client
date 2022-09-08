import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { addVideo } from "../../Hook/useMongoose";
import { searchVideoID } from "../../apis/youtube";
import { useNavigate } from "react-router-dom";

function ModalVideo(props) {
  const [link, setLink] = useState();
  const [videoID, setVideoID] = useState("");
  const [acc, setAcc] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setVideoID(e.target.value.substring(e.target.value.search("=") + 1, e.target.value.length));
  };
  useEffect(() => {
    setAcc(localStorage.getItem("googleAcc") || localStorage.getItem("user"));
  }, [acc]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = JSON.parse(acc);
    const data = await searchVideoID(videoID);
    const video = {
      title: data.items[0].snippet.title,
      videoID: data.items[0].id,
      channelTitle: data.items[0].snippet.channelTitle,
      publishedAt: data.items[0].snippet.publishedAt,
      viewCount: data.items[0].statistics.viewCount,
      likeCount: data.items[0].statistics.likeCount,
      CateID: data.items[0].snippet.categoryId,
      createdBy: {
        userId: user._id,
        imageUrl: user.imageUrl,
        username: user.name,
      },
    };
    if(addVideo(video)){
      navigate("/")
    }
  };

  return (
    <figure className="h-screen flex bg-gray-100 sm: px-3 ">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <div className="text-primary m-6">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-medium text-gray-800 mb-4">Share your link Youtube </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <FontAwesomeIcon className="absolute top-4 text-red-500" icon={faYoutube} />
              <input
                name="link"
                type="text"
                value={link}
                onChange={handleChange}
                placeholder="Link Youtube"
                className={
                  "w-full p-3 text-gray-800 border-b outline-none text-sm transition duration-150 ease-in-out mb-1 ml-2 focus:border-red-500 "
                }
              />
            </div>
            <div className="flex items-center mt-3">
              <button
                type="sumbit"
                className={
                  "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none w-full"
                }
                value="Login"
              >
                Share
              </button>
            </div>
          </form>
        </div>
      </div>
    </figure>
  );
}

export default ModalVideo;

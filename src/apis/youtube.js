import axios from "axios";

const key = "AIzaSyAKrnJSC62IFw8jUGpkzOiOZVV6Y1cEisg";

export const searchVideo = async (videoId) => {
  const response =
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${key}
    `);
  return response.json();
};

export const videoList = async (string) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=surfing&videoType=${string}&key=${key}`
  );
  return res.json();
};

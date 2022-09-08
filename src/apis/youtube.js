export const searchVideoID = async (videoId) => {
  const response =
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API}`);
  return await response.json();
};

export const videoList = async (offset) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${offset}&q=surfing&videoType=any&key=${process.env.REACT_APP_KEY_YOUTUBE_API}`
  );
  return res.json();
};
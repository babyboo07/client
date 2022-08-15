const key = "AIzaSyAqVDkRJ6EIT_GRiekDo7oELbS-jlFFIvY";

export const searchVideo = async (videoId) => {
  const response =
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${key}
    `);
  return response.json();
};

export const videoList = async (offset) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${offset}&q=surfing&videoType=any&key=${key}`
  );
  return res.json();
};
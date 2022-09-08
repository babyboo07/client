export const addUser = async (data) => {
  const res = await fetch(`http://localhost:5000/v1/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  });
  return res.json();
};

export const getListVideos = async () => {
  const res = await fetch(`${process.env.REACT_APP_HTTP_API}videos`);
  return res.json();
};

export const getlListCategory = async () => {
  const res = await fetch(`${process.env.REACT_APP_HTTP_API}category`);
  return res.json(res);
};

export const searchByCategory = async (CateID) => {
  const res = await fetch(`${process.env.REACT_APP_HTTP_API}videos/seachCategory?CateID=${CateID}`);
  return res.json(res);
};

export const searchByName = async (searchQuery) => {
  const res = await fetch(`${process.env.REACT_APP_HTTP_API}videos/search?title=${searchQuery}`);
  return res.json(res);
};

export const addVideo = async (videoResult) => {
  const response = await fetch(`${process.env.REACT_APP_HTTP_API}videos/create-video`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify({video: videoResult}),
  });
  return response.json();
};

export const login = async (req) => {
  const user = await fetch(`${process.env.REACT_APP_HTTP_API}v1/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  const response = await user.json();
  if (response) {
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    localStorage.setItem("user", JSON.stringify(response.user)); 
  }
  return response;
};

export const addUser = async (data)=>{
  const res = await fetch(`http://localhost:5000/v1/auth/register`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({data:data}),
  });
  return res.json();
}

export const getListVideos = async () =>{
  const res = await fetch(`http://localhost:5000/v1/videos`);
  return res.json();
}

export const getlListCategory = async () =>{
  const res = await fetch(`http://localhost:5000/v1/category`);
  return res.json(res);
}
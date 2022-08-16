export const addUser = async (data) => {
  const res = await fetch(process.env.REACT_APP_HTTP_API_ADD_USER, data);
  return res.json();
};

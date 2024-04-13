import axios from "axios";

axios.defaults.baseURL = "https://6618ebe29a41b1b3dfbe526b.mockapi.io/";

export const getAdverts = async () => {
  const response = await axios.get(`adverts/`);
  if (response.statusText !== "OK") {
    throw new Error("Something went wrong");
  }
  return response.data;
};

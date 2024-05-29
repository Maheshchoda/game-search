import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "64b93a2c66254301afc8394452d798ed",
  },
});

import axios from "axios";

const KEY = "AIzaSyABgQv0lIJNVB58-YYx2Lx20Pqeszu-pz0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    q: "surfboards",
  },
});

youtube.get("/search");

import axios from "axios";

const KEY = "AIzaSyAd5riBWieBd_YmcNArvLT3SbAbFShS4_I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    key: KEY,
  },
});

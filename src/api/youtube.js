import axios from "axios";

const KEY = "AIzaSyB9TsvSFczenUVCAQFxheHSEgtP2evQR0E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});

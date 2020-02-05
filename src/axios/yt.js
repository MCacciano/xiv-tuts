import axios from "axios"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: process.env.YT_API_KEY,
    part: "snippet",
  },
})

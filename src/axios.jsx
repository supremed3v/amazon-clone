import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-7c60d.cloudfunctions.net/api",
});

export default instance;

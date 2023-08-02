import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "79f1d84d55134c99bb355cafaa5b1ba9",
  },
});

import axios from "axios";

const apiExternas = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiExternas;

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/item",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true
  }
})
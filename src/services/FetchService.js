import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dog.ceo/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRandomDogImages() {
    return apiClient.get("/breeds/image/random/20");
  },
  getDogBreeds() {
    return apiClient.get("/breeds/list");
  },
  getChoosedBreed(breed = "") {
    return apiClient.get(`/breed/${breed}/images`);
  },
};

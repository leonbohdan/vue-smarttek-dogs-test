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
  // getRandomDogImages() {
  //   axios
  //     .get("https://dog.ceo/api/breeds/image/random/20")
  //     .then((response) => {
  //       if (this.choosedBreed) {
  //         this.choosedBreed = "";
  //       }
  //       this.dogs = response.data.message;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  getDogBreeds() {
    return apiClient.get("/breeds/list");
  },
  // getDogsBreed() {
  //   axios
  //     .get("https://dog.ceo/api/breeds/list")
  //     .then((response) => {
  //       this.breeds = response.data.message;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  getChoosedBreed(breed = "") {
    return apiClient.get(`/breed/${breed}/images`);
  },
  // getChoosedBreed(breed = "") {
  //   axios
  //     .get(`https://dog.ceo/api/breed/${breed}/images`)
  //     .then((response) => {
  //       this.$router.push({
  //         name: "breed",
  //         params: {},
  //       });
  //       this.dogs = response.data.message;
  //       this.choosedBreed = breed;
  //       this.showAllBreeds = false;
  //       console.log("response.data", response.data.message);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};

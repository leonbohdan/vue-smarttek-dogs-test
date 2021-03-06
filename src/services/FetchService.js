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
  getRandomDogImagesOnScroll(number = 20) {
    return apiClient.get(`/breeds/image/random/${number}`);
  },
  getRandomDogImages() {
    return apiClient.get("/breeds/image/random/20");
  },
  getDogBreeds() {
    return apiClient.get("/breeds/list");
  },
  getChoosedBreed(breed = "") {
    return apiClient.get(`/breed/${breed}/images`);
  },
  getBreedNameFromURL(urls) {
    let newDog = {
      image: "",
      breed: "",
    };

    let newArr = [];

    urls.map((el) => {
      const url = new URL(el).pathname;
      let arr = url.split("/");

      newDog.image = el;
      newDog.breed = arr[2];

      newArr.push(newDog);
      newDog = {
        image: "",
        breed: "",
      };
    });

    return newArr;
  },
  shuffleDogs(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  },
};

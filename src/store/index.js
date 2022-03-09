import Vue from "vue";
import Vuex from "vuex";
import FetchService from "@/services/FetchService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    breeds: [],
    favouriteDogs: [],
    choosedBreed: "",
    showAllBreeds: false,
    ABCSort: false,
  },
  getters: {
    allDogs(state) {
      return state.dogs;
    },
    allBreeds(state) {
      return state.breeds;
    },
    showAllBreeds(state) {
      return state.showAllBreeds;
    },
    choosedBreed(state) {
      return state.choosedBreed;
    },
    ABCSort(state) {
      return state.ABCSort;
    },
    favouriteDogs(state) {
      return state.favouriteDogs;
    },
    numberOfDogs(state) {
      return state.dogs.image.length;
    },
  },
  mutations: {
    ADD_DOGS(state, event) {
      state.dogs = event;
    },
    ADD_BREEDS(state, event) {
      state.breeds = event;
    },
    REMOVE_FAVOURITE_DOGS(state, index) {
      state.favouriteDogs.splice(index, 1);

      localStorage.setItem(
        "favouriteDogs",
        JSON.stringify(state.favouriteDogs)
      );
    },
    ADD_FAVOURITE_DOGS(state, favDog) {
      state.favouriteDogs.push(favDog);

      localStorage.setItem(
        "favouriteDogs",
        JSON.stringify(state.favouriteDogs)
      );
    },
    ADD_FAVOURITE_DOGS_INITIALISE(state) {
      if (localStorage.getItem("favouriteDogs")) {
        let favDogsLS = JSON.parse(localStorage.getItem("favouriteDogs"));

        const equals =
          state.favouriteDogs.length === favDogsLS.length &&
          state.favouriteDogs.every((v, i) => v === favDogsLS[i]);

        if (equals) {
          return;
        }

        state.favouriteDogs.push(...favDogsLS);
      }
    },
    SHOW_ALL_BREEDS(state) {
      state.showAllBreeds = !state.showAllBreeds;
    },
    CHOOSED_BREED(state, event) {
      state.choosedBreed = event;
    },
    ABC_SORT(state) {
      state.ABCSort = !state.ABCSort;
      state.dogs.sort((a, b) => a.breed.localeCompare(b.breed));
    },
    SHUFFLE_DOGS(state) {
      FetchService.shuffleDogs(state.dogs);
    },
  },
  actions: {
    fetchDogsOnScroll({ commit }, number = 20) {
      FetchService.getRandomDogImagesOnScroll(number)
        .then((response) => {
          const dogsData = FetchService.getBreedNameFromURL(
            response.data.message
          );
          const newData = this.state.dogs.concat(dogsData);
          commit("ADD_DOGS", newData);
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    fetchDogs({ commit }) {
      FetchService.getRandomDogImages()
        .then((response) => {
          const dogsData = FetchService.getBreedNameFromURL(
            response.data.message
          );
          commit("ADD_DOGS", dogsData);
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    getBreeds({ commit }) {
      FetchService.getDogBreeds()
        .then((response) => {
          commit("ADD_BREEDS", response.data.message);
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    showAllBreeds({ commit }) {
      commit("SHOW_ALL_BREEDS");
    },
    isSortedAlphabetical({ commit }) {
      commit("ABC_SORT");
    },
    shuffleDogs({ commit }) {
      commit("SHUFFLE_DOGS");
    },
    choosedBreed({ commit }, breed) {
      FetchService.getChoosedBreed(breed)
        .then((response) => {
          const dogsData = FetchService.getBreedNameFromURL(
            response.data.message
          );
          commit("ADD_DOGS", dogsData);
          commit("CHOOSED_BREED", breed);
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
    clearChoosedBreed({ commit }) {
      commit("CHOOSED_BREED", "");
    },
    removeFavouriteDogs({ commit }, index) {
      commit("REMOVE_FAVOURITE_DOGS", index);
    },
    addFavouriteDogs({ commit }, dog) {
      commit("ADD_FAVOURITE_DOGS", dog);
    },
    initialiseFavouriteDogs({ commit }) {
      commit("ADD_FAVOURITE_DOGS_INITIALISE");
    },
  },
  modules: {},
});

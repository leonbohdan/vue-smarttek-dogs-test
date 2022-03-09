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
    isFavouriteDogs(state) {
      return state.favouriteDogs;
    },
  },
  mutations: {
    ADD_DOGS(state, event) {
      state.dogs = event;
    },
    ADD_BREEDS(state, event) {
      state.breeds = event;
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
    },
  },
  actions: {
    fetchDogs({ commit }) {
      FetchService.getRandomDogImages()
        .then((response) => {
          commit("ADD_DOGS", response.data.message);
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
    ABCSort({ commit }) {
      commit("ABC_SORT");
    },
    choosedBreed({ commit }, breed) {
      FetchService.getChoosedBreed(breed).then((res) => {
        commit("ADD_DOGS", res.data.message);
        commit("CHOOSED_BREED", breed);
      });
    },
    clearChoosedBreed({ commit }) {
      commit("CHOOSED_BREED", "");
    },
    addFavouriteDogs({ commit }, dog) {
      commit("ADD_FAVOURITE_DOGS", dog);
    },
    initialiseFavouriteDogs({ commit }) {
      commit("ADD_FAVOURITE_DOGS_INITIALISE");
    },
    // async fetchDogs2({ commit }) {
    //   const res = await fetch("https://dog.ceo/api/breeds/image/random/20");
    //   const dogs = await res.json();
    //   commit("ADD_DOGS", dogs);
    // },
  },
  modules: {},
});

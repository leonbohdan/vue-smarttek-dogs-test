import Vue from "vue";
import Vuex from "vuex";
import FetchService from "@/services/FetchService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    breeds: [],
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
  },
  mutations: {
    ADD_DOGS(state, event) {
      state.dogs = event;
    },
    ADD_BREEDS(state, event) {
      state.breeds = event;
    },
    SHOW_ALL_BREEDS(state) {
      state.showAllBreeds = !state.showAllBreeds;
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
    // async fetchDogs2({ commit }) {
    //   const res = await fetch("https://dog.ceo/api/breeds/image/random/20");
    //   const dogs = await res.json();
    //   commit("ADD_DOGS", dogs);
    // },
  },
  modules: {},
});

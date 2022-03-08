<template>
  <v-container>
    <div class="d-flex align-center justify-space-between mb-5 mt-5">
      <span class="d-flex align-center pointer">
        <span class="mr-2">Все породы</span>
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.002 0.168977C0.772777 -0.0563256 0.401136 -0.0563256 0.171916 0.168977C-0.0573044 0.394279 -0.0573044 0.759567 0.171916 0.984869L4.08496 4.83102C4.31418 5.05633 4.68582 5.05633 4.91504 4.83102L8.82808 0.984869C9.05731 0.759567 9.05731 0.394279 8.82808 0.168977C8.59886 -0.0563256 8.22722 -0.0563256 7.998 0.168977L4.5 3.60718L1.002 0.168977Z"
            fill="#000"
          />
        </svg>
      </span>

      <span>Сортировка по алфавиту</span>
    </div>

    <div class="d-flex align-center flex-wrap">
      <span
        v-for="breed in breeds"
        :key="breed"
        class="breed mr-3 mb-2 pointer"
      >
        {{ breed }}
      </span>
    </div>

    <div class="d-flex align-center flex-wrap justify-space-between">
      <dog-card v-for="dog in dogs" :key="dog" :imageLink="dog" />
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import DogCard from "@/components/DogCard.vue";

export default {
  name: "HomeView",
  components: {
    DogCard,
  },
  data() {
    return {
      dogs: [],
      breeds: [],
    };
  },
  methods: {
    fetchAllDogs() {
      axios
        .get("https://dog.ceo/api/breeds/image/random/20")
        .then((response) => {
          this.dogs = response.data.message;
          // console.log("response.data", response.data.message);
          // console.log("this.dogs", this.dogs);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
    fetchDogsBreed() {
      axios
        .get("https://dog.ceo/api/breeds/list")
        .then((response) => {
          this.breeds = response.data.message;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.fetchAllDogs();
    this.fetchDogsBreed();
  },
};
</script>

<style lang="sass">
.breed
  padding: 4px 12px
  border: 2px solid #626262
  border-radius: 20px
  transition: .2s background-color ease-in-out
  &:hover
    background-color: #EEEEEE
    transition: .2s background-color ease-in-out
</style>

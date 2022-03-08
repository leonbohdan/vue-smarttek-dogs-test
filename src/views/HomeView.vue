<template>
  <v-container>
    <!-- <div class="d-flex align-center justify-space-between mt-5">
      <div class="d-flex align-center">
        <span
          class="d-flex align-center pointer mr-5"
          @click="openShowAllBreeds()"
        >
          <span class="mr-2">Все породы</span>
          <svg
            :class="['arrowSvg', { open: showAllBreeds }]"
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

        <span v-if="choosedBreed" class="breed checked d-flex align-center">
          <span class="mr-2">{{ choosedBreed }}</span>

          <svg
            class="deleteBreedSvg pointer"
            @click="fetchAllDogs()"
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.20218 2.27892L5.3626 0.118492C5.52059 -0.0394974 5.77674 -0.0394974 5.93473 0.118492C6.09272 0.276482 6.09272 0.532634 5.93473 0.690624L3.77431 2.85105L5.93479 5.01153C6.09278 5.16952 6.09278 5.42567 5.93479 5.58366C5.7768 5.74165 5.52065 5.74165 5.36266 5.58366L3.20218 3.42318L1.0417 5.58366C0.883708 5.74165 0.627556 5.74165 0.469567 5.58366C0.311577 5.42567 0.311577 5.16951 0.469567 5.01152L2.63004 2.85105L0.469628 0.69063C0.311638 0.53264 0.311638 0.276488 0.469628 0.118498C0.627617 -0.0394917 0.883769 -0.0394917 1.04176 0.118498L3.20218 2.27892Z"
              fill="#283593"
            />
          </svg>
        </span>
        <span v-else class="breed checked">Все пёсели</span>
      </div>

      <span>
        <v-switch
          v-model="ABCSort"
          label="Сортировка по алфавиту"
          inset
        ></v-switch>
      </span>
    </div> -->

    <!-- <div class="d-flex align-center flex-wrap">
      <div :class="['showAllBreeds', { open: showAllBreeds }]">
        <span
          v-for="breed in breeds"
          :key="breed"
          class="breed d-inline-block mr-3 mb-4 pointer"
          @click="fetchChoosedBreed(breed)"
        >
          {{ breed }}
        </span>
      </div>
    </div> -->
    <!-- <dog-breeds /> -->

    <dog-breeds-filter />

    <div class="d-flex align-center flex-wrap justify-space-between">
      <dog-card v-for="(dog, i) in allDogs" :key="i" :imageLink="dog" />
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import DogCard from "@/components/DogCard.vue";
// import DogBreeds from "@/components/DogBreeds.vue";
import DogBreedsFilter from "@/components/DogBreedsFilter.vue";

export default {
  name: "HomeView",
  components: {
    DogCard,
    DogBreedsFilter,
    // DogBreeds,
  },
  computed: {
    ...mapGetters(["allDogs", "showAllBreeds", "choosedBreed", "ABCSort"]),
    // allDogs() {
    //   return this.$store.getters.allDogs;
    // },
  },
  methods: {
    // openShowAllBreeds() {
    //   console.log("showAllBreeds");
    //   this.$store.dispatch("showAllBreeds");
    // },
    // fetchAllDogs() {
    //   axios
    //     .get("https://dog.ceo/api/breeds/image/random/20")
    //     .then((response) => {
    //       if (this.choosedBreed) {
    //         this.choosedBreed = "";
    //       }
    //       this.dogs = response.data.message;
    //       // console.log("response.data", response.data.message);
    //       // console.log("this.dogs", this.dogs);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally(() => (this.loading = false));
    // // },
    // fetchDogsBreed() {
    //   axios
    //     .get("https://dog.ceo/api/breeds/list")
    //     .then((response) => {
    //       this.breeds = response.data.message;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    fetchChoosedBreed(breed = "") {
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((response) => {
          this.$router.push({
            name: "breed",
            params: {},
          });
          // this.dogs = response.data.message;
          // this.choosedBreed = breed;
          // this.showAllBreeds = false;
          console.log("response.data", response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {},
  created() {
    this.$store.dispatch("fetchDogs");
    this.$store.dispatch("getBreeds");
    console.log("this.$store", this.$store);
  },
};
</script>

<style lang="sass">
.showAllBreeds
  max-height: 0
  overflow: hidden
  transition: all .3s ease-in-out
  &.open
    margin-bottom: 10px
    max-height: 1000px

.breed
  padding: 4px 12px
  border: 2px solid #626262
  border-radius: 20px
  transition: background-color .2s ease-in-out

  &:hover
    background-color: #EEEEEE

  &::first-letter
    text-transform: uppercase

  &.checked
    width: fit-content
    border: 2px solid #283593
    color: #283593
    font-weight: 700

    &:hover
      background-color: #fff

  .deleteBreedSvg
    min-width: 15px
    height: 15px
    padding: 5px
    box-sizing: content-box
    transition: transform .2s ease-in-out
    &:hover
      transform: scale(1.2)

.arrowSvg
  transition: transform .2s ease-in-out
  &.open
    transform: rotate(-180deg)
</style>

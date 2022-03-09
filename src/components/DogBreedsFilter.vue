<template>
  <div>
    <div class="d-flex align-center justify-space-between mb-5">
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
          <span class="mr-2 firstUpper">{{ choosedBreed }}</span>

          <svg
            class="deleteBreedSvg pointer"
            @click="clearBreed()"
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
          v-if="!isBreedPage"
          @click="ABCSortButton()"
          label="Сортировка по алфавиту"
          inset
        ></v-switch>
      </span>
    </div>

    <dog-breeds />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DogBreeds from "./DogBreeds.vue";

export default {
  name: "DogBreedsFilter",
  components: {
    DogBreeds,
  },
  computed: {
    ...mapGetters(["showAllBreeds", "choosedBreed", "ABCSort"]),
    isBreedPage() {
      return this.$route.name === "breed";
    },
  },
  methods: {
    openShowAllBreeds() {
      this.$store.dispatch("showAllBreeds");
    },
    clearBreed() {
      this.$store.dispatch("fetchDogs");
      this.$store.dispatch("clearChoosedBreed");
    },
    ABCSortButton() {
      this.$store.dispatch("isSortedAlphabetical");

      if (!this.ABCSort) {
        this.$store.dispatch("shuffleDogs");
      }
    },
  },
};
</script>

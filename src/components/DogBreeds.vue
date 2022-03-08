<template>
  <div class="d-flex align-center flex-wrap">
    <div :class="['showAllBreeds', { open: showAllBreeds }]">
      <span
        v-for="(breed, i) in allBreeds"
        :key="i"
        class="breed d-inline-block mr-3 mb-4 pointer"
        @click="isChoosedBreed(breed)"
      >
        {{ breed }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DogBreeds",
  computed: {
    ...mapGetters(["allBreeds", "showAllBreeds"]),
  },
  // created() {
  //   this.$store.dispatch("getBreeds");
  // },
  methods: {
    isChoosedBreed(breed = "") {
      this.$router.push({
        name: "breed",
        params: {},
      });
      console.log("breed", breed);
    },
  },
};
</script>

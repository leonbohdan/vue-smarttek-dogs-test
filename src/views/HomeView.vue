<template>
  <v-container>
    <dog-breeds-filter />

    <div class="d-flex align-center flex-wrap justify-space-between">
      <dog-card
        v-for="(dog, i) in allDogs"
        :key="i"
        :imageLink="dog"
        :index="i"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import DogCard from "@/components/DogCard.vue";
import DogBreedsFilter from "@/components/DogBreedsFilter.vue";

export default {
  name: "HomeView",
  components: {
    DogCard,
    DogBreedsFilter,
  },
  computed: {
    ...mapGetters(["allDogs", "showAllBreeds", "choosedBreed", "ABCSort"]),
  },
  mounted() {
    if (this.$route.name !== "breed") {
      this.$store.dispatch("fetchDogs");
      this.$store.dispatch("clearChoosedBreed");
    }
    this.$store.dispatch("initialiseFavouriteDogs");
  },
  created() {
    this.$store.dispatch("fetchDogs");
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

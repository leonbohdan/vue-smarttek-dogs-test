<template>
  <v-container class="breedPage">
    <h1>Dog breed page</h1>

    <dog-breeds-filter />

    <div class="d-flex align-center flex-wrap justify-space-between">
      <dog-card v-for="(dog, i) in allDogs" :key="i" :imageLink="dog" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import DogCard from "@/components/DogCard.vue";
import DogBreedsFilter from "@/components/DogBreedsFilter.vue";

export default {
  name: "DogBreedPage",
  components: {
    DogBreedsFilter,
    DogCard,
  },
  computed: {
    ...mapGetters(["allDogs"]),
  },
};
</script>

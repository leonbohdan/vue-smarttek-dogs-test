<template>
  <v-container class="breedPage">
    <h1 class="mb-5 firstUpper">
      <template v-if="choosedBreed">{{ choosedBreed }}</template>
      <template v-else>Все пёсели</template>
    </h1>

    <dog-breeds-filter />

    <div class="dogsView d-flex align-center flex-wrap">
      <dog-card
        v-for="(dog, i) in allDogs"
        :key="i"
        :imageLink="dog.image"
        :dogBreed="dog.breed"
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
  name: "DogBreedPage",
  components: {
    DogBreedsFilter,
    DogCard,
  },
  computed: {
    ...mapGetters(["allDogs", "choosedBreed"]),
  },
};
</script>

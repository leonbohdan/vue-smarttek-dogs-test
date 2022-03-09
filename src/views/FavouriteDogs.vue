<template>
  <v-container class="favourites">
    <h1 class="mb-5">Избранные пёсели</h1>

    <div class="d-flex align-center flex-wrap justify-space-between">
      <dog-card v-for="(dog, i) in favouriteDogs" :key="i" :imageLink="dog" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import DogCard from "@/components/DogCard.vue";

export default {
  name: "FavouriteDogs",
  components: {
    DogCard,
  },
  computed: {
    ...mapGetters(["favouriteDogs"]),
  },
  mounted() {
    this.$store.dispatch("initialiseFavouriteDogs");
  },
};
</script>

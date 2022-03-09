<template>
  <v-img max-height="190" max-width="280" :src="imageLink" class="image mb-5">
    <svg
      class="svgHeart pointer"
      @click="addToFavourite(imageLink)"
      width="29"
      height="26"
      viewBox="0 0 29 26"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="svg-path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7579 25.6993L2.62464 14.8743C-0.874882 11.4716 -0.874882 5.9453 2.62464 2.54267C5.87363 -0.61635 10.9956 -0.831789 14.5 1.89636C18.0044 -0.831789 23.1264 -0.61635 26.3754 2.54267C29.8749 5.9453 29.8749 11.4716 26.3754 14.8743L15.2421 25.6993C14.8297 26.1003 14.1703 26.1003 13.7579 25.6993ZM4.10909 4.04943C1.45989 6.62528 1.45989 10.7919 4.10909 13.3678L14.5002 23.4712L24.8914 13.3678C27.5406 10.7919 27.5406 6.62528 24.8914 4.04943C22.2294 1.46119 17.9043 1.46119 15.2423 4.04943C14.8299 4.45042 14.1706 4.45042 13.7581 4.04943C11.0962 1.46119 6.77104 1.46119 4.10909 4.04943Z"
        fill="#fff"
      />

      <path
        :class="['svg-path-filled', { isInFavorites: isAlreadyInFavorites }]"
        d="M13.758 25.7c.412.4 1.072.4 1.484 0l11.133-10.826a8.555 8.555 0 0 0 0-12.331c-3.249-3.16-8.37-3.375-11.875-.647-3.504-2.728-8.626-2.512-11.875.647a8.555 8.555 0 0 0 0 12.331L13.758 25.7Z"
        fill="#fff"
      />
    </svg>
  </v-img>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DogCard",
  props: {
    imageLink: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["favouriteDogs"]),
    isAlreadyInFavorites() {
      return this.favouriteDogs.indexOf(this.imageLink) > -1;
    },
  },
  methods: {
    addToFavourite(dog) {
      this.$store.dispatch("addFavouriteDogs", dog);
    },
  },
  mounted() {
    console.log("isAlreadyInFavorites", this.isAlreadyInFavorites);
    console.log("this.favouriteDogs", this.favouriteDogs);
  },
};
</script>

<style lang="sass">
.image
  position: relative
  background: linear-gradient(3.21deg, #000000 -15.62%, rgba(0, 0, 0, 0) 45.69%)
  border-radius: 8px
  transition: transform .2s ease-in-out
  &:hover
    transform: scale(1.02)

  .svgHeart
    position: absolute
    top: 15px
    left: 15px

    .svg-path-filled
      display: none
      &.isInFavorites
        display: block

    &:hover
      fill: #fff
      .svg-path
        display: none
      .svg-path-filled
        display: block
</style>

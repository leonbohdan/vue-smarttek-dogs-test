<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container class="d-flex align-center justify-space-between">
        <div>
          <router-link to="/">
            <span class="logo white--text">Пёсель</span>
          </router-link>
        </div>

        <div>
          <router-link to="/favourites">
            <span class="favouriteBtn d-flex align-center">
              <span class="mr-2">Избранные пёсели</span>
              <svg
                width="16"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="svg-path"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.59 13.838 1.449 8.01c-1.93-1.832-1.93-4.808 0-6.64C3.241-.33 6.067-.448 8 1.021c1.933-1.469 4.76-1.353 6.552.348 1.93 1.832 1.93 4.808 0 6.64l-6.143 5.83a.599.599 0 0 1-.818 0ZM2.268 2.18c-1.462 1.387-1.462 3.631 0 5.018L8 12.638l5.733-5.44c1.462-1.387 1.462-3.63 0-5.018C12.264.787 9.878.787 8.41 2.18a.599.599 0 0 1-.82 0C6.123.787 3.737.787 2.268 2.18Z"
                  fill="#000"
                />
              </svg>
            </span>
          </router-link>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer
      color="primary"
      class="d-flex align-center justify-center white--text"
    >
      <router-link to="/">
        <span class="white--text">Пёсель</span>
      </router-link>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
@import "assets/__init.sass"

.logo
  font-size: 30px
  font-weight: 700

.favouriteBtn
  color: #000
  transition: .3s color ease-in-out

  .svg-path
    transition: .3s fill ease-in-out

  &:hover
    color: #424242
    transition: .3s color ease-in-out

    .svg-path
      fill: #424242
      transition: .3s fill ease-in-out
</style>

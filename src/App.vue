<template>
  <v-app>
    <v-main class="pt-0">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import AppFooter from "./components/AppFooter";

export default {
  name: "App",

  components: {
    AppFooter,
  },
};
</script>
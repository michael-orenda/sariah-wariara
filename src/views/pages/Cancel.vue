<template>
  <div>
    <CancelSection />
  </div>
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
import CancelSection from '../../components/sections/CancelSection.vue';

export default {
  name: "Cancel",

  components: {
    CancelSection
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
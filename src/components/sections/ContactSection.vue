<template>
  <section class="pa-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row class="justify-center">
            <h1 class="font-weight-bold display-1">For More Information, Contact Us Through:</h1>
          </v-row>
          <v-row justify="center" class="my-10">
            <v-col cols="12" sm="4">
              <h1 class="font-weight-dark display-1">Family Contacts</h1>
              <h3 class="font-weight-dark mt-3"><span class="primary--text">Contact Person:</span> Stephen Anyonje</h3>
              <h3 class="font-weight-dark mt-3"><span class="primary--text">Phone:</span> +254 714 393818</h3>
              <h3 class="font-weight-dark"><span class="primary--text">Email:</span> <a href="mailto:stephenanyonje.gyg@gmail.com">stephenanyonje.gyg@gmail.com</a></h3>
            </v-col>
            <v-col cols="12" sm="4">
              <h1 class="font-weight-dark display-1">Aga Khan Hospital</h1>
              <h3 class="font-weight-dark mt-3"><span class="primary--text">Doctor:</span> Dr. Sean</h3>
            </v-col>
            <v-col cols="12" sm="4">
              <h1 class="font-weight-dark display-1">Kenyatta National Hospital</h1>
              <h3 class="font-weight-dark mt-3"><span class="primary--text">Doctor:</span> Dr. Osano</h3>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
// import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 6) || "Name must be at least 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length >= 10) || "Message must be at least 10 characters",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: "",
      color: "",
    },
  }),
  methods: {
    submit() {}
  },
};
</script>
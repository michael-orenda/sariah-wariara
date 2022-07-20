<template>
  <section class="pa-8" id="cancel" align="center">
    <v-container fluid fill-height>
      <v-layout>
        <v-row>
          <v-col cols="12">
            <v-row class="justify-center">
              <h1 class="font-weight-bold display-2 primary--text">Thank You For Your Contribution</h1>
            </v-row>
            <v-row class="justify-center">
              <v-col cols="12">
                <p class="font-weight-light display-1">
                  Hi, Thank you for saving a life by contributing towards Sariah's Medical Fund and also for
                  being part of helping our family by spreading this message of donation and standing with us
                  as a family. God bless you.
                </p>
                <p>
                  <span class="font-weight-light primary--text display-1">#ForWariara</span>
                </p>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-btn
                outlined
                class="error--text"
                large
                dark
                @click="$router.push('/')"
              >
                Back To Home Page
                <v-icon class="ml-2">mdi-home</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
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

<template>
  <section id="hero">
    <v-parallax dark src="@/assets/img/bgDarkBlue.jpeg" height="850">
      <v-row justify="center" class="mt-15 mb-n15">
        <v-col cols="10">
          <v-row>
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">
                Lend A Hand For Baby Sariah Wariara
              </h1>
              <h2 class="display-1 primary--text font-weight-bold mb-4">
                For A Heart Corrective Surgery In India
              </h2>
              <p class="font-weight-light">
                Baby Sariah Wariara has "Tetralogy of Fallot" malformation
                <br v-if="$vuetify.breakpoint.mdAndUp" />
                of the heart septum which allows deoxygenated blood from
                <br v-if="$vuetify.breakpoint.mdAndUp" />
                the right ventricle to the left ventricle resulting to
                hypoventilation <br v-if="$vuetify.breakpoint.mdAndUp" />
                of the body system hence you see blue discoloration of
                extremities, skin, <br v-if="$vuetify.breakpoint.mdAndUp" />
                frenulum and tip of the tongue... it's correctible as early as
                now
              </p>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#donations')"
                class="mt-5"
              >
                Make A Donation
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4">
              <v-img
                src="@/assets/img/sariah.jpeg"
                max-height="350"
                max-width="350"
                class="hidden-sm-and-down float-right"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center">
        <h1 class="display-1 primary--text font-weight-bold mt-15">
          You Can Contribute Via:
        </h1>
      </v-row>
    </v-parallax>
    <v-container fluid id="donations">
      <v-row justify="center">
        <v-col cols="10">
          <v-row justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(donation, i) in donations"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-card-text></v-card-text>
                  <v-img
                    :src="donation.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ donation.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1" @click="donation.id == 1 ? (mpesa = !mpesa) : ''">
                    {{ donation.text }}
                  </h4>
                  <Mpesa v-if="mpesa && donation.id == 1" />
                  <PayPal v-if="donation.id == 2" />
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PayPal from '../PayPal.vue';
import Mpesa from '../Mpesa.vue';

export default {
  name: "HomeSection",
  components: {
    PayPal,
    Mpesa
},
  data() {
    return {
      dialog: false,
      mpesa: false,
      donations: [
        {
          id: 1,
          img: require("@/assets/img/mpesa.jpeg"),
          title: "PAYBILL NO.: 8046207 ACCOUNT: YOUR NAME",
          text: "Click Here To Contribute Via Mpesa",
        },
        {
          id: 2,
          img: require("@/assets/img/paypal.png"),
          title: "HAVE A PAYPAL ACCOUNT?",
          text: "Click Here To Contribute Via Paypal",
        },
        {
          id: 3,
          img: require("@/assets/img/card.jpeg"),
          title: "USE CARD/CREDIT?",
          text: "Click Here To Contribute Via Mastercard/Visa",
        },
      ],
    };
  },
  methods: {
    showInputs(id) {
      alert(id);
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.7s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;
  transition: all 0.7s ease-in-out;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>

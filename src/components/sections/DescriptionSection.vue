<template>
  <section id="description" class="mt-10">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col 
              v-for="item in fundraiser" 
              :key="item.id" 
              :cols="$vuetify.breakpoint.mdAndUp? '3' : '12'"
              :md="$vuetify.breakpoint.mdAndUp? '3' : '12'" 
              :sm="$vuetify.breakpoint.mdAndUp? '3' : '12'" 
              class="white--text text-center my-4"
            >
              <div
                v-if="item.icon"
                class="col-icon mb-6"
              >
                <v-icon :color="item.color + ' lighten-1'" x-large>{{
                  item.icon
                }}</v-icon>
              </div>
              <slot v-else :name="'icon' + i"></slot>

              <div class="col-content">
                <div>
                  <h3
                    v-if="item.value"
                    class="col-headline headline text--lighten-2"
                    :class="`${item.color}--text`"
                  >
                    <number
                      tag="div"
                      ref="number2"
                      :format="toMoneyFormat"
                      :from="0"
                      :to="item.value"
                      :duration="5"
                      @click="playAnimation"
                    />
                  </h3>
                  <slot v-else :name="'headline' + i"></slot>
                </div>
                <div>
                  <p
                    v-if="item.name"
                    class="col-value mb-0 white--text mt-3"
                  >
                    {{ item.name }}
                  </p>
                  <slot v-else :name="'value' + i"></slot>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="12" class="white--text text-center">
              <h1 class="font-weight-light display-2 mb-2">Tetralogy of Fallot</h1>
              <p class="font-weight-light">
                Tetralogy of Fallot is a heart condition that surrounds the four
                chambers, normally after birth the valves are supposed to close but in this case my
                daughter's did not thus the murmurs, whereby the oxygenated and
                deoxygenated blood mix and allow unnecessary communication.
                Luckily, it was noticed earlier enough, of course a number of
                times we've got to deal with cyanosis attacks whereby she turns
                blue but by the grace of God we overcame. Currently, we are on
                medication that softens the spells at least until the issue is
                corrected.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import FundraiserData from '../../assets/fundraiser.json';

export default {
  name: "DescriptionSection",
  data() {
    return {
      fundraiser: FundraiserData,
    }
  },
  methods: {
    playAnimation() {
      this.$refs.number2.play()
    },
    toMoneyFormat(number) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(number);
    },
    toMoneyFormat2(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
#description {
  background-image: url("~@/assets/img/bgDarkBlue.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#description .container,
#description .row {
  height: 100%;
}
</style>

<style lang="scss" scoped>
section {
  .section-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .col-headline {
      font-size: 1.5rem !important;
      line-height: 2rem !important;
    }
    .col-value {
      font-size: 0.95rem !important;
      line-height: 1.8rem !important;
    }
    .col-headline,
    .col-value {
      text-align: center;
      justify-content: center;
    }
    .col-icon {
      border-radius: 50%;
      overflow: hidden;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #eee;
    }
  }
}

@media (max-width: 960px) {
  section {
    .col-headline {
      font-size: 1.3rem !important;
      line-height: 1.7rem !important;
    }
  }
}
</style>
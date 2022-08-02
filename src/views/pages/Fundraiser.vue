<template>
  <section class="pa-8" id="cancel" align="center">
    <v-container fluid fill-height>
      <v-layout>
        <v-row align="center" class="justify-center">
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
                  <v-icon :color="item.color + ' darken-1'" x-large>{{
                    item.icon
                  }}</v-icon>
                </div>
                <slot v-else :name="'icon' + i"></slot>

                <div class="col-content">
                  <div>
                    <h3
                      v-if="item.value"
                      class="col-headline headline text--darken-2"
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
                      class="col-value mb-0 primary--text mt-3"
                    >
                      {{ item.name }}
                    </p>
                    <slot v-else :name="'value' + i"></slot>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <template>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card elevation="0" min-width="500px" color="white">
                <v-card-text>
                  <v-text-field
                    label="Additional Amount Raised"
                    placeholder="Additional Amount Raised"
                    type="number"
                    outlined
                    v-model="editedItem.amount"
                    :rules="rules.required"
                  />
                  <v-btn 
                    :loading="loading" 
                    color="primary" 
                    block 
                    @click="submit"
                  >
                    Submit
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-form>
          </template>
        </v-row>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import FundraiserData from '../../assets/fundraiser.json';

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    fundraiser: FundraiserData,
    valid: true,
    loading: false,
    rules: {
      required: [
        (v) => !!v || "Field is required",
      ],
    },
    editedItem: {
      amount: '',
    },
  }),
  methods: {
    validate () {
      return this.$refs.form.validate();
    },
    reset () {
      return this.$refs.form.reset();
    },
    resetValidation () {
      return this.$refs.form.resetValidation();
    },
    submit() {
      this.valid = this.validate();
      if (this.valid) {
        var userConfirmation = confirm("Are you sure you want to submit this update?");
        if (userConfirmation) {
          this.loading = true;
        }
      }
    },
    toMoneyFormat(number) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "KES",
      }).format(number);
    },
  },
};
</script>
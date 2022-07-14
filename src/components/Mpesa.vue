<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card elevation="0">
      <v-card-text>
        <v-text-field
          label="Phone Number"
          placeholder="Phone Number"
          type="number"
          outlined
          v-model="editedItem.phone_number"
          :rules="rules.required"
        />
        <v-text-field
          label="Donation Amount"
          placeholder="Donation Amount"
          type="number"
          outlined
          v-model="editedItem.donation_amount"
          :rules="rules.required"
        />
        <v-btn :loading="loading" color="primary" block @click="donate">
          Donate
        </v-btn>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
import { Buffer } from "buffer";
import moment from "moment";
import axios from "axios";

export default {
  name: "Mpesa",
  data() {
    return {
      loading: false,
      valid: true,
      rules: {
        required: [
          (v) => !!v || "Field is required",
        ],
      },
      editedItem: {
        donation_amount: 0,
        phone_number: 0,
      },
    };
  },
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
    donate() {
      let date = moment(new Date()).format("YYYYMMDDHHMMSS");
      let password = Buffer.from(process.env.VUE_APP_MPESA_BUSINESS_CODE + process.env.VUE_APP_MPESA_PASS_KEY + date).toString("base64");
      let credentials = Buffer.from(process.env.VUE_APP_MPESA_CONSUMER_KEY + ":" + process.env.VUE_APP_MPESA_CONSUMER_SECRET).toString("base64");

      this.valid = this.validate();
      if (this.valid) {
        this.editedItem.BusinessShortCode = process.env.VUE_APP_MPESA_BUSINESS_CODE;
        this.editedItem.Password = password;
        this.editedItem.Timestamp = date;
        this.editedItem.TransactionType = "CustomerPayBillOnline";
        this.editedItem.Amount = this.editedItem.donation_amount;
        this.editedItem.PartyA = this.editedItem.phone_number;
        this.editedItem.PartyB = process.env.VUE_APP_MPESA_BUSINESS_CODE;
        this.editedItem.PhoneNumber = this.editedItem.phone_number;
        this.editedItem.CallBackURL = process.env.VUE_APP_MPESA_CALLBACK_URL;
        this.editedItem.AccountReference = "Baby Sariah Wariara's Fundraiser";
        this.editedItem.TransactionDesc = "Donation to Baby Sariah Wariara's Heart Surgery";
        this.loading = true;
        this.generateAccessToken(credentials);
      }
    },
    async generateAccessToken(credentials) {
      let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
      let config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + credentials,
        },
      };

      await axios.get(url, config)
        .then((res) => {
          console.log(res);
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
  },
};
</script>

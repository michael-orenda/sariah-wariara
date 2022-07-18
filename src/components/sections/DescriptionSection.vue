<template>
  <section id="description" class="mt-10">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
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
export default {
  name: "DescriptionSection",
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
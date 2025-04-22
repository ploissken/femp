<template>
  <v-parallax :src="bgImage">
    <v-container id="home">
      <v-row>
        <v-col cols="12" md="6" class="mt-16 text-black">
          <h1>{{ $t("home.title") }}</h1>
          <p class="text-justify">{{ $t("home.description") }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
import desktopBg from "../../assets/home/bg.jpg";
import mobileBg from "../../assets/home/bg-mobile.jpg";

export default {
  computed: {
    bgImage() {
      return this.$vuetify.display.mobile ? mobileBg : desktopBg;
    },
  },
};
</script>

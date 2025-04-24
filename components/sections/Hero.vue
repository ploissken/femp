<template>
  <v-parallax :src="bgImage">
    <v-container id="home" class="h-screen">
      <v-row>
        <v-col cols="12" md="6" class="mt-16 text-black">
          <h1>{{ $t("home.title") }}</h1>
          <p class="text-justify">{{ $t("home.description") }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import desktopBg from "~/assets/images/hero/bg.jpg";
import mobileBg from "~/assets/images/hero/bg-mobile.jpg";

const display = useDisplay();
const bgImage = computed(() => (display.mobile.value ? mobileBg : desktopBg));
</script>

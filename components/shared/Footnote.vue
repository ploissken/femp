<template>
  <v-container id="contact" fluid class="ma-0 pa-0">
    <v-row class="bg-black d-flex justify-center">
      <v-col
        cols="12"
        md="8"
        class="text-caption text-uppercase d-flex justify-center"
      >
        <a href="https://github.com/ploissken/femp">Femp Engenharia</a>
        <span class="px-2">
          {{ year }}
        </span>
        <a href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDate } from "vuetify";
import { computed } from "vue";

const year = computed(() => {
  const date = useDate();
  return `by Rodrigo Souza | ${date.getYear(new Date())}`;
});
</script>

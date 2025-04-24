<template>
  <v-container id="clients">
    <v-row class="justify-center my-6">
      <v-col cols="12" class="my-6">
        <h1>{{ $t("clients.title") }}</h1>
      </v-col>
      <v-col v-for="index in numberOfClientImages" :key="index" cols="4" md="3">
        <v-sheet>
          <nuxt-img
            format="webp"
            height="100"
            :style="{ width: '100%', objectFit: 'contain' }"
            :src="`images/clients/${index}.jpg`"
            :alt="`clients logo ${index}`"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { numberOfClientImages } from "~/config/consts";
</script>

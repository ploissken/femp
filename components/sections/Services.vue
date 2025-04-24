<template>
  <v-container id="services">
    <v-row class="my-16">
      <v-col cols="12" md="6">
        <h1>{{ $t("services.title") }}</h1>
        <p class="text-justify">{{ $t("services.description") }}</p>
      </v-col>
      <v-spacer />
      <v-col cols="11" md="4">
        <ul class="px-6">
          <li v-for="segment in 14" :key="segment">
            {{ $t(`services.segment.${segment}`) }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="my-16">
      <v-slide-group show-arrows mobile center-active :scroll-offset="60">
        <v-slide-group-item v-for="index in numberOfServiceImages" :key="index">
          <v-sheet class="ma-4" :width="300">
            <nuxt-img
              format="webp"
              height="400"
              :style="{ width: '100%', objectFit: 'contain' }"
              :src="`images/services/${index}.jpg`"
              :alt="$t(`services.example.${index}`)"
            />
            <h4 class="my-6 text-center text-uppercase">
              {{ $t(`services.example.${index}`) }}
            </h4>
          </v-sheet>
        </v-slide-group-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { numberOfServiceImages } from "~/config/consts";
</script>

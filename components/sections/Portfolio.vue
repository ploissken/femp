<template>
  <v-container id="portfolio">
    <v-row class="my-16">
      <v-col cols="12" md="6">
        <h2>{{ $t("portfolio.title") }}</h2>
        <h4>{{ $t("portfolio.subtitle") }}</h4>
        <p class="mt-2 text-justify">{{ $t("portfolio.description_one") }}</p>
        <p class="mt-2 text-justify">{{ $t("portfolio.description_two") }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-carousel
          height="400"
          cycle
          :show-arrows="false"
          color="black"
          hide-delimiter-background
        >
          <v-carousel-item v-for="title in simulationItems" :key="title" touch>
            <v-sheet height="80%">
              <h4 class="text-center">
                {{ $t(`portfolio.simulation.${title}`) }}
              </h4>
              <nuxt-img
                format="webp"
                height="320"
                :style="{ width: '100%', objectFit: 'contain' }"
                :src="`simulations/${title}.jpg`"
                :alt="$t(`portfolio.simulation.${title}`)"
              />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="my-16">
      <v-col cols="12" md="6">
        <nuxt-img
          format="webp"
          :style="{ width: '100%', objectFit: 'cover' }"
          src="simulations/analysis.jpg"
          :alt="$t(`portfolio.simulation.analysis`)"
        />
      </v-col>
      <v-col cols="12" md="6" class="px-8">
        <h2>{{ $t("portfolio.analysis.title") }}</h2>
        <ul class="text-justify">
          <li v-for="i in 7" :key="i">
            {{ $t(`portfolio.analysis.bullet_${i}`) }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const simulationItems = ["linear", "buckling", "modal", "fatigue"];
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h1>{{ $t("portfolio.title") }}</h1>
        <h3>{{ $t("portfolio.subtitle") }}</h3>
        <p class="mt-2">{{ $t("portfolio.description_one") }}</p>
        <p class="mt-2">{{ $t("portfolio.description_two") }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-carousel
          height="400"
          cycle
          :show-arrows="false"
          color="black"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="{ img, title } in simulationItems"
            :key="title"
            touch
          >
            <v-sheet height="80%">
              <h4 class="text-center">{{ $t(title) }}</h4>
              <v-img :src="img" />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" md="6">
        <v-img src="../assets/portfolio-analysis.jpg" cover />
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ $t("portfolio.analysis.title") }}</h1>
        <ul>
          <li v-for="i in 7" :key="i">
            {{ $t(`portfolio.analysis.bullet_${i}`) }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// https://vitejs.dev/guide/assets.html#importing-asset-as-url
import linear from "../assets/simulations/linear.jpg";
import buckling from "../assets/simulations/buckling.jpg";
import modal from "../assets/simulations/modal.jpg";
import fatigue from "../assets/simulations/fatigue.jpg";

export default {
  data() {
    return {
      simulationItems: [
        {
          img: linear,
          title: "portfolio.simulation.linear",
        },
        {
          img: buckling,
          title: "portfolio.simulation.buckling",
        },
        {
          img: modal,
          title: "portfolio.simulation.modal",
        },
        {
          img: fatigue,
          title: "portfolio.simulation.fatigue",
        },
      ],
    };
  },
};
</script>

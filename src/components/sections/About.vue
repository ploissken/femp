<template>
  <v-container id="about" fluid class="bg-grey-darken-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6">
          <h2>{{ $t("about.title") }}</h2>
          <p class="text-justify">{{ $t("about.company_focus") }}</p>
          <p class="text-justify pt-2">{{ $t("about.company_plus") }}</p>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img src="../../assets/about.png" />
        </v-col>
      </v-row>
      <v-row class="my-16">
        <v-col cols="12" md="3">
          <h3>{{ $t("about.mission.title") }}</h3>
          <p class="text-justify">{{ $t("about.mission.description") }}</p>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="3">
          <h3>{{ $t("about.vision.title") }}</h3>
          <p class="text-justify">{{ $t("about.vision.description") }}</p>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="3">
          <h3>{{ $t("about.values.title") }}</h3>
          <ul>
            <li v-for="value in 6" :key="value">
              {{ $t(`about.values.value_${value}`) }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

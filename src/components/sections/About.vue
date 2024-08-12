<template>
  <v-container fluid class="bg-grey-darken-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6">
          <h1>{{ $t("about.title") }}</h1>
          <p>{{ $t("about.company_focus") }}</p>
          <p>{{ $t("about.company_plus") }}</p>
        </v-col>
      </v-row>
      <v-row class="my-16">
        <v-col>
          <h2>{{ $t("about.mission.title") }}</h2>
          <p>{{ $t("about.mission.description") }}</p>
        </v-col>
        <v-col>
          <h2>{{ $t("about.vision.title") }}</h2>
          <p>{{ $t("about.vision.description") }}</p>
        </v-col>
        <v-col>
          <h2>{{ $t("about.values.title") }}</h2>
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

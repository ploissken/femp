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
        <v-slide-group-item
          v-for="(, index) in serviceImages.length"
          :key="index"
        >
          <v-sheet class="ma-4" :width="160">
            <v-img :src="serviceImages[index]" :height="100" />
            <h4 class="my-6 text-center text-uppercase">
              {{ $t(`services.example.${index + 1}`) }}
            </h4>
          </v-sheet>
        </v-slide-group-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
// https://vitejs.dev/guide/assets.html#importing-asset-as-url
import s1 from "../../assets/services/service-1.jpg";
import s2 from "../../assets/services/service-2.jpg";
import s3 from "../../assets/services/service-3.jpg";
import s4 from "../../assets/services/service-4.jpg";
import s5 from "../../assets/services/service-5.jpg";
import s6 from "../../assets/services/service-6.jpg";
import s7 from "../../assets/services/service-7.jpg";
import s8 from "../../assets/services/service-8.jpg";
import s9 from "../../assets/services/service-9.jpg";
import s10 from "../../assets/services/service-10.jpg";
import s11 from "../../assets/services/service-11.jpg";
import s12 from "../../assets/services/service-12.jpg";
import s13 from "../../assets/services/service-13.jpg";
import s14 from "../../assets/services/service-14.jpg";
import s15 from "../../assets/services/service-15.jpg";

export default {
  data() {
    return {
      serviceImages: [
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        s9,
        s10,
        s11,
        s12,
        s13,
        s14,
        s15,
      ],
    };
  },
};
</script>

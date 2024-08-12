<template>
  <v-container>
    <v-row class="my-16">
      <v-col cols="12" md="6">
        <h1>{{ $t("services.title") }}</h1>
        <p>{{ $t("services.description") }}</p>
      </v-col>
      <v-col cols="12" md="6">
        <ul>
          <li v-for="segment in 13" :key="segment">
            {{ $t(`services.segment.${segment}`) }}
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="my-16">
      <v-slide-group show-arrows mobile center-active :scroll-offset="60">
        <v-slide-group-item v-for="{ img, title } in serviceItems" :key="title">
          <v-sheet class="ma-4" :width="160">
            <v-img :src="img" :height="100" />
            <h4 class="my-6 text-center text-uppercase">
              {{ $t(title) }}
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
      serviceItems: [
        {
          img: s1,
          title: "services.example.1",
        },
        {
          img: s2,
          title: "services.example.2",
        },
        {
          img: s3,
          title: "services.example.3",
        },
        {
          img: s4,
          title: "services.example.4",
        },
        {
          img: s5,
          title: "services.example.5",
        },
        {
          img: s6,
          title: "services.example.6",
        },
        {
          img: s7,
          title: "services.example.7",
        },
        {
          img: s8,
          title: "services.example.8",
        },
        {
          img: s9,
          title: "services.example.9",
        },
        {
          img: s10,
          title: "services.example.10",
        },
        {
          img: s11,
          title: "services.example.11",
        },
        {
          img: s12,
          title: "services.example.12",
        },
        {
          img: s13,
          title: "services.example.13",
        },
        {
          img: s14,
          title: "services.example.14",
        },
        {
          img: s15,
          title: "services.example.15",
        },
      ],
    };
  },
};
</script>

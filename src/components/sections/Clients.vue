<template>
  <v-container id="clients">
    <v-row class="justify-center my-6">
      <v-col cols="12" class="my-6">
        <h1>{{ $t("clients.title") }}</h1>
      </v-col>
      <v-col v-for="index in clientLogos.length" cols="4" md="3">
        <v-sheet>
          <v-img :height="100" :src="clientLogos[index - 1]" />
          <!-- <h4 class="text-center text-uppercase my-6">
            {{ $t(`clients.names.${index}`) }}
          </h4> -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import client1 from "../../assets/clients/1.jpg";
import client2 from "../../assets/clients/2.jpg";
import client3 from "../../assets/clients/3.jpg";
import client4 from "../../assets/clients/4.jpg";
import client5 from "../../assets/clients/5.jpg";
import client6 from "../../assets/clients/6.jpg";
import client7 from "../../assets/clients/7.jpg";
import client8 from "../../assets/clients/8.jpg";
import client9 from "../../assets/clients/9.jpg";
import client10 from "../../assets/clients/10.jpg";
import client11 from "../../assets/clients/11.jpg";
import client12 from "../../assets/clients/12.jpg";
import client13 from "../../assets/clients/13.jpg";
import client14 from "../../assets/clients/14.jpg";
import client15 from "../../assets/clients/15.jpg";
import client16 from "../../assets/clients/16.jpg";
import client17 from "../../assets/clients/17.jpg";
import client18 from "../../assets/clients/18.jpg";
import client19 from "../../assets/clients/19.jpg";
import client20 from "../../assets/clients/20.jpg";
import client21 from "../../assets/clients/21.jpg";
import client22 from "../../assets/clients/22.jpg";
import client23 from "../../assets/clients/23.jpg";
import client24 from "../../assets/clients/24.jpg";
import client25 from "../../assets/clients/25.jpg";
import client26 from "../../assets/clients/26.jpg";
import client27 from "../../assets/clients/27.jpg";
import client28 from "../../assets/clients/28.jpg";
import client29 from "../../assets/clients/29.jpg";
import client30 from "../../assets/clients/30.jpg";
import client31 from "../../assets/clients/31.jpg";
import client32 from "../../assets/clients/32.jpg";
import client33 from "../../assets/clients/33.jpg";
import client34 from "../../assets/clients/34.jpg";
import client35 from "../../assets/clients/35.jpg";
import client36 from "../../assets/clients/36.jpg";

export default {
  data() {
    return {
      clientLogos: [
        client1,
        client2,
        client3,
        client4,
        client5,
        client6,
        client7,
        client8,
        client9,
        client10,
        client11,
        client12,
        client13,
        client14,
        client15,
        client16,
        client17,
        client18,
        client19,
        client20,
        client21,
        client22,
        client23,
        client24,
        client25,
        client26,
        client27,
        client28,
        client29,
        client30,
        client31,
        client32,
        client33,
        client34,
        client35,
        client36,
      ],
    };
  },
};
</script>

<template>
  <v-container>
    <v-row class="justify-center my-6">
      <v-col cols="12" class="my-6">
        <h1>{{ $t("clients.title") }}</h1>
      </v-col>
      <v-col v-for="index in clientLogos.length" cols="6" md="4">
        <v-sheet>
          <v-img :height="150" :src="clientLogos[index - 1]" />
          <h4 class="text-center text-uppercase my-6">
            {{ $t(`clients.names.${index}`) }}
          </h4>
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
      ],
    };
  },
};
</script>

<template>
  <v-container v-scroll="onScroll" fluid class="ma-0 pa-0">
    <SharedTopMenu :offset-top="offsetTop" />
    <SectionsHero />
    <SectionsPortfolio />
    <SectionsAbout />
    <SectionsServices />
    <SectionsClients />
    <SectionsContact />
    <SharedWhatsappButton />
    <SharedFootnote />
  </v-container>
</template>

<script setup lang="ts">
const offsetTop = ref(0);

function onScroll(e: Event) {
  offsetTop.value = (e.target?.defaultView as Window).scrollY;
}
</script>

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
const { t } = useI18n();

function onScroll(_e: Event) {
  offsetTop.value = window.scrollY;
}

useSeo({
  title: t("seo.title"),
  description: t("seo.ogContent"),
  url: t("seo.url"),
  image: t("seo.imgUrl"),
});
</script>

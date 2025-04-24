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
<script>
export default {
  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.defaultView.scrollY;
    },
  },
};
</script>

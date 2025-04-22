<template>
  <v-container v-scroll="onScroll" fluid class="ma-0 pa-0">
    <Menu :offset-top="offsetTop" />
    <SectionsHome />
    <SectionsPortfolio />
    <SectionsAbout />
    <SectionsServices />
    <SectionsClients />
    <SectionsContact />
    <WhatsappButton />
    <SectionsFootnote />
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

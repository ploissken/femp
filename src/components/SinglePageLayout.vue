<template>
  <v-container fluid class="ma-0 pa-0" v-scroll="onScroll">
    <Menu :offsetTop="offsetTop" />
    <Home />
    <Portfolio />
    <About />
    <Services />
    <Clients />
    <Contact />
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

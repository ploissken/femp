<template>
  <v-sheet
    width="100%"
    class="d-flex align-center justify-center cursor-pointer"
    color="transparent"
    position="relative"
    @click="onClick"
  >
    <nuxt-img src="map.png" format="webp" sizes="sm:420px md:500px lg:600px" />
  </v-sheet>
</template>

<script setup>
const onClick = () => {
  window.open(
    "https://www.google.com/maps/place/R.+Dr.+Pomp%C3%ADlio+Mercadante,+398+-+Centro,+Jacare%C3%AD+-+SP,+12308-510/@-23.3059018,-45.9639272,17z/data=!3m1!4b1!4m6!3m5!1s0x94cdcb72e9a29847:0xf842f7ce0d6d1835!8m2!3d-23.3059049!4d-45.9623222!16s%2Fg%2F11c259f_77?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
    "_blank"
  );
};
</script>

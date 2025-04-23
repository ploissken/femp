<template>
  <v-main @scroll.passive="onScroll">
    <TopMenu :offset-top="offsetTop" />
    <slot />
    <SectionsFootnote />
  </v-main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const offsetTop = ref(0);

function onScroll(e) {
  offsetTop.value = e.target.defaultView.scrollY;
}
</script>

<template>
  <v-app-bar :class="['menu-bar', menuColor]" elevation="5">
    <v-app-bar-title>
      <nuxt-img
        format="webp"
        height="50"
        class="cursor-pointer"
        width="150"
        alt="femp logo"
        :src="logo"
        @click="goto('home')"
      />
    </v-app-bar-title>
    <v-spacer />
    <v-sheet v-if="!isMobile" color="transparent">
      <v-btn v-for="item in menuItems" :key="item" @click="goto(item)">
        {{ $t(`menu.${item}`) }}
      </v-btn>
    </v-sheet>
    <v-btn
      v-else
      icon="mdi-menu"
      aria-label="toggle-menu-button"
      @click="mobileDrawerOpen = !mobileDrawerOpen"
    />
  </v-app-bar>

  <v-navigation-drawer v-model="mobileDrawerOpen" location="right" temporary>
    <v-sheet class="d-flex flex-column">
      <v-btn
        v-for="item in menuItems"
        :key="item"
        class="text-left"
        variant="plain"
        @click="goto(item)"
      >
        {{ $t(`menu.${item}`) }}
      </v-btn>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from "vue";
import { useGoTo, useDisplay } from "vuetify";

const props = defineProps({
  offsetTop: {
    type: Number,
    required: true,
  },
});

const { offsetTop } = toRefs(props);

const menuItems = ["portfolio", "about", "services", "clients", "contact"];
const mobileDrawerOpen = ref(false);

const goTo = useGoTo();
const display = useDisplay();
const isMobile = computed(() => display.mobile.value);
const isDarkMenu = computed(() => offsetTop.value > 300);
const menuColor = computed(() => (isDarkMenu.value ? "bg-black" : "bg-white"));
const logo = computed(() => (isDarkMenu.value ? "logo.png" : "logo_black.png"));

function goto(destiny: string) {
  mobileDrawerOpen.value = false;
  goTo(`#${destiny}`, { duration: 500, easing: "linear" });
}
</script>

<style scoped>
.menu-bar {
  transition-property: "background-color";
  transition: background-color 0.7s ease;
}
</style>

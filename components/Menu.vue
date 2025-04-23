<template>
  <v-app-bar :class="['menu-bar', menuColor]" elevation="5">
    <v-app-bar-title>
      <v-img
        :src="logo"
        class="cursor-pointer"
        alt="logo"
        width="150"
        @click="goto('home')"
      />
    </v-app-bar-title>
    <v-spacer />
    <v-sheet v-if="!isMobile.value" color="transparent">
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
import blackLogo from "../assets/logo_black.png";
import whiteLogo from "../assets/logo.png";

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
const logo = computed(() => (isDarkMenu.value ? whiteLogo : blackLogo));

function goto(destiny) {
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

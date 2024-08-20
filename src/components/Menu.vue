<template>
  <v-app-bar
    :class="menuColor"
    :style="{
      transitionProperty: 'background-color',
      transition: 'background-color .7s',
    }"
    elevation="5"
  >
    <v-app-bar-title>
      <v-img :src="logo" width="150" />
    </v-app-bar-title>
    <v-spacer />
    <v-sheet color="transparent" v-if="!$vuetify.display.mobile">
      <v-btn v-for="item in menuItems" :key="item" @click="onClick(item)">
        {{ $t(`menu.${item}`) }}
      </v-btn>
    </v-sheet>
    <v-btn
      v-else
      icon="mdi-menu"
      @click="mobileDrawerOpen = !mobileDrawerOpen"
    />
  </v-app-bar>
  <v-navigation-drawer v-model="mobileDrawerOpen" location="right" temporary>
    <v-sheet class="d-flex flex-column">
      <v-btn
        v-for="item in menuItems"
        :key="item"
        @click="onClick(item)"
        variant="plain"
        class="text-left"
      >
        {{ $t(`menu.${item}`) }}
      </v-btn>
    </v-sheet>
  </v-navigation-drawer>
</template>

<script>
import blackLogo from "../assets/logo_black.png";
import whiteLogo from "../assets/logo.png";
import { useGoTo } from "vuetify";

export default {
  setup() {
    const goTo = useGoTo();
    return { goTo };
  },

  props: {
    offsetTop: {
      required: true,
      type: Number,
    },
  },

  data() {
    return {
      menuItems: ["portfolio", "about", "services", "clients", "contact"],
      mobileDrawerOpen: false,
    };
  },

  computed: {
    menuColor() {
      return this.offsetTop > 300 ? "bg-black" : "bg-white";
    },

    logo() {
      return this.menuColor === "bg-black" ? whiteLogo : blackLogo;
    },
  },

  methods: {
    onClick(destiny) {
      this.mobileDrawerOpen = false;
      this.goTo(`#${destiny}`, {
        duration: 500,
        easing: "linear",
      });
    },
  },
};
</script>

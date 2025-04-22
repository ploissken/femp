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
      <v-img
        :src="logo"
        width="150"
        :style="{ cursor: 'pointer' }"
        @click="goto('home')"
      />
    </v-app-bar-title>
    <v-spacer />
    <v-sheet v-if="!$vuetify.display.mobile" color="transparent">
      <v-btn v-for="item in menuItems" :key="item" @click="goto(item)">
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
        variant="plain"
        class="text-left"
        @click="goto(item)"
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
  props: {
    offsetTop: {
      required: true,
      type: Number,
    },
  },
  setup() {
    const goTo = useGoTo();
    return { goTo };
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
    goto(destiny) {
      this.mobileDrawerOpen = false;
      this.goTo(`#${destiny}`, {
        duration: 500,
        easing: "linear",
      });
    },
  },
};
</script>

<template>
  <v-container fluid class="bg-grey-darken-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6">
          <v-sheet
            width="100%"
            class="d-flex align-center justify-center cursor-pointer"
            color="transparent"
            position="relative"
            @click="onClick"
          >
            <nuxt-img
              src="images/contact/map.png"
              format="webp"
              sizes="sm:420px md:500px lg:600px"
            />
          </v-sheet>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="5" class="align-content-sm-center">
          <span>
            <h1>{{ $t("contact.title") }}</h1>
            <p class="my-2">{{ $t(`contact.phone`) }}</p>
            <a :href="`mailto:${$t('contact.email')}`">
              <p class="my-2">{{ $t(`contact.email`) }}</p>
            </a>
            <p class="mt-2">{{ $t(`contact.address_1`) }}</p>
            <p>{{ $t(`contact.address_2`) }}</p>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
const onClick = () => {
  window.open(
    "https://www.google.com/maps/place/R.+Dr.+Pomp%C3%ADlio+Mercadante,+398+-+Centro,+Jacare%C3%AD+-+SP,+12308-510/@-23.3059018,-45.9639272,17z/data=!3m1!4b1!4m6!3m5!1s0x94cdcb72e9a29847:0xf842f7ce0d6d1835!8m2!3d-23.3059049!4d-45.9623222!16s%2Fg%2F11c259f_77?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
    "_blank"
  );
};
</script>

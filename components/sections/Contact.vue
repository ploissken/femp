<template>
  <v-container fluid class="bg-grey-darken-3">
    <v-container>
      <v-row class="my-16">
        <v-col cols="12" md="6">
          <FempMap />
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

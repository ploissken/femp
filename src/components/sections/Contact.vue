<template>
  <v-container fluid class="bg-grey-darken-3">
    <v-container>
      <v-row class="my-16">
        <v-spacer />
        <v-col cols="12" md="6">
          <h1>{{ $t("contact.title") }}</h1>
          <p v-for="row in contactData" class="my-2">
            {{ $t(`contact.${row}`) }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contactData: [
        "title",
        "phone",
        "email_1",
        "email_2",
        "email_3",
        "address",
      ],
    };
  },
};
</script>

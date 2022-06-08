<template>
  <v-app>
    <Header></Header>
    <v-main style="padding: 64px 0px">
      <v-card class="overflow-hidden">
        <v-container fluid class="grey lighten-4">
          <router-view />
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
@import "@/assets/styles/global.css";
</style>

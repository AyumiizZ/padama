<template>
  <v-app-bar fixed color="white">
    <router-link class="ma-2" to="/">
      <v-btn text> home </v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Search
          <v-icon> mdi-chevron-down </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(menu, index) in searchMenus" :key="index">
          <v-list-item-title>
            <router-link class="ma-2" :to="menu.path">
              <v-btn text> {{ menu.title }} </v-btn>
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <router-link class="ma-2" to="/login" v-if="!$store.state.isUserLoggedIn">
      <v-btn text> Login </v-btn>
    </router-link>
    <router-link class="ma-2" to="/logout" v-else>
      <v-btn text> logout </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "Home" });
    },
    darkmode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" },
      ],
      searchMenus: [
        { title: "Patient ID", path: "/search" },
        { title: "Case ID", path: "/case-search" },
      ],
    };
  },
};
</script>

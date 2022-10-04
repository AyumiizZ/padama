<template>
  <div style="align-items: top !important" width="100%">
    <SearchModule
      :title="title"
      :searchModuleProps="searchModuleProps"
    ></SearchModule>
    <v-card elevation="4">
      <v-data-table
        :headers="headers"
        :items="queryResults"
        :items-per-page="5"
        multi-sort
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Result</v-toolbar-title>
          </v-toolbar>
          <v-divider></v-divider>
        </template>
        <template v-slot:item="row">
          <router-link
            custom
            v-slot="{ navigate }"
            :to="{ name: 'patient', params: { pid: row.item.pid } }"
          >
            <tr @click="navigate">
              <!-- <tr> -->
              <td>{{ row.item.pid }}</td>
              <td>{{ row.item.firstname }}</td>
              <td>{{ row.item.lastname }}</td>
              <td>{{ row.item.sex }}</td>
              <td>{{ calAge(row.item.birthDate) }}</td>
            </tr>
          </router-link>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import SearchModule from "@/components/SearchModule.vue";
export default {
  name: "SearchPIDView",
  methods: {
    calAge: function (birthDateString) {
      var today = new Date();
      var birthDate = new Date(birthDateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
  data() {
    return {
      title: "Search By Patient ID",
      searchModuleProps: {
        searchKey: "Registration No.",
      },
      headers: [
        {
          text: "Registration No.",
          value: "pid",
        },
        {
          text: "First Name",
          value: "firstname",
        },
        {
          text: "Last Name",
          value: "lastname",
        },
        {
          text: "Sex",
          value: "sex",
        },
        {
          text: "Age",
          value: "age",
        },
      ],
      queryResults: [
        {
          pid: 6101234567,
          firstname: "Harry",
          lastname: "potter",
          sex: "gay",
          birthDate: new Date(1998, 5, 10),
        },
      ],
    };
  },
  components: { SearchModule },
};
</script>

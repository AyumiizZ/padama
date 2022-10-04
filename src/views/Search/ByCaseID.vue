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
        multi-sort
        :items-per-page="5"
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
              <td>{{ row.item.cid }}</td>
              <!-- <td>{{ parseDiag(row.item.diagnosis) }}</td> -->
              <td>
                <!-- {{ parseDiag(row.item.diagnosis) }} -->
                <v-chip
                  dense
                  class="ma-1"
                  v-for="item in row.item.diagnosis"
                  :key="item.index"
                >
                  {{ item }}
                </v-chip>
              </td>
              <td>{{ parseDatetime(row.item.visitDate) }}</td>
              <td>{{ parseDatetime(row.item.operativeDate) }}</td>
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
  name: "SearchCIDView",
  methods: {
    parseDatetime(date) {
      if (date === null) {
        return "N/A";
      }
      var dmy = date.split("T")[0];
      var time = date.split("T")[1].split(".")[0];

      return dmy + " " + time;
    },
  },
  data() {
    return {
      title: "Search By Case ID",
      searchModuleProps: {
        searchKey: {
          title: "Dianosis",
          chips: [
            "Unspecified",
            "Cleft palate",
            "Cleft hard and soft palate with cleft lip",
            "Cleft soft palate",
            "Cleft lip",
            "Cleft hard palate",
          ],
        },
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
          text: "Case ID",
          value: "cid",
        },
        {
          text: "Diagnosis",
          value: "diagnosis",
        },
        {
          text: "Visited Date",
          value: "visitDate",
        },
        {
          text: "Operative Date",
          value: "operativeDate",
        },
      ],
      queryResults: [
        {
          pid: 6101234567,
          cid: 1,
          diagnosis: [
            "Cleft hard and soft palate with cleft lip",
            "Cleft palate",
          ],
          firstname: "Harry",
          lastname: "potter",
          visitDate: new Date().toISOString(),
          operativeDate: new Date().toISOString(),
        },
      ],
    };
  },
  components: { SearchModule },
};
</script>

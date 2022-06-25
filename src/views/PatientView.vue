<template>
  <v-responsive>
    <div class="py-2">
      <h1 class="text-h4 font-weight-bold">
        {{ this.$route.params.pid }}
        {{ patientQueryData.firstname }}
        {{ patientQueryData.lastname }}
        ({{ patientQueryData.sex }})
      </h1>
      <h2 class="text-h5 font-weight-regular py-2">
        Age:
        {{ calAge(patientQueryData.birthDate) }}
        | Birthdate:
        {{ parseDate(patientQueryData.birthDate) }}
        | Smoke:
        {{ patientQueryData.smoke ? "Yes" : "No" }}
      </h2>
      <h2 class="text-h5 font-weight-regular">
        <v-chip-group disabled column>
          <p class="pt-1 pr-2 my-0">UD:</p>
          <v-chip v-for="(tag, index) in patientQueryData.ud" :key="index">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </h2>
      <v-divider class="my-2" />
    </div>
    <SearchModule
      :title="null"
      :searchModuleProps="searchModuleProps"
    ></SearchModule>
    <v-card elevation="4">
      <v-data-table
        :headers="headers"
        :items="caseQueryData"
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
          <tr>
            <td>
              {{ parseDatetime(row.item.visitedDate) }}
            </td>
            <td>{{ row.item.cid }}</td>
            <td>
              <v-chip v-for="item in row.item.diagnosis" :key="item.index">
                {{ item }}
              </v-chip>
            </td>
            <td>{{ row.item.type }}</td>
            <td>
              {{ calAgeTo(patientQueryData.birthDate, row.item.visitedDate) }}
            </td>
            <td class="fit-width">
              <v-row no-gutters>
                <router-link
                  :to="{ name: 'PDF', params: { cid: row.item.cid } }"
                  class="px-2 py-0 ma-0 noline"
                >
                  <v-btn>Show PDF</v-btn>
                </router-link>
                <router-link
                  :to="{ name: 'video', params: { cid: row.item.cid } }"
                  class="px-2 py-0 ma-0 noline"
                >
                  <v-btn>Show Video</v-btn>
                </router-link>
                <router-link
                  :to="{ name: 'image', params: { cid: row.item.cid } }"
                  class="px-2 py-0 ma-0 noline"
                >
                  <v-btn>Show Image</v-btn>
                </router-link>
                <!-- <div class="px-2 py-0 ma-0 noline"> -->
                <!-- <v-btn> More Info</v-btn> -->
                <InfoDialog />
                <!-- </div> -->
              </v-row>
            </td>
          </tr>
          <!-- <tr>
            <td>{{ parseDate(row.item.visitedDate) }}</td>
            <td>{{ row.item.cid }}</td>
            <td>
              <v-chip
                v-for="item in parseDiag(row.item.diagnosis)"
                :key="item.index"
              >
                {{ item }}
              </v-chip>
            </td>
            <td>{{ row.item.type }}</td>
            <td>{{ patientResults.age }}</td>
            <td>
              <router-link
                :to="{ name: 'PDF', params: { cid: patientResults.cid } }"
              >
                <v-btn>Show PDF</v-btn>
              </router-link>
              <router-link
                :to="{ name: 'video', params: { cid: patientResults.cid } }"
              >
                <v-btn>Show Video</v-btn>
              </router-link>
              <router-link
                :to="{ name: 'image', params: { cid: patientResults.cid } }"
              >
                <v-btn>Show Image</v-btn>
              </router-link>
              <v-dialog v-model="row.item.dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    More Info
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Info
                  </v-card-title>

                  <v-card-text>
                    <li>
                      <strong>Diagnosis: </strong>
                      {{ parseDiag(row.item.diagnosis) }}
                    </li>
                    <li>
                      asdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddasddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </li>
                    <li>
                      {{ row.item.visitedDate }}
                    </li>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="row.item.dialog = false"
                    >
                      I accept
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </td>
          </tr> -->
        </template>
      </v-data-table>
    </v-card>
  </v-responsive>
</template>

<script>
import SearchModule from "@/components/SearchModule.vue";
import InfoDialog from "@/components/InfoDialog.vue";
export default {
  name: "PatientView",
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
    calAgeTo: function (birthDateString, toDate) {
      var today = new Date(toDate);
      var birthDate = new Date(birthDateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    parseDate(date) {
      if (date === null) {
        return "N/A";
      }
      var dmy = date.split("T")[0];
      return dmy;
    },
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
      searchModuleProps: {
        searchKey: "Case No.",
      },
      patientQueryData: {
        firstname: "Harry",
        lastname: "Potter",
        sex: "Male",
        smoke: true,
        birthDate: new Date(1998, 5, 10).toISOString(),
        ud: ["DM", "HT", "DLP", "CKD"],
      },
      caseQueryData: [
        {
          cid: 1,
          pid: 6101234567,
          visitedDate: new Date().toISOString(),
          type: "Tumor",
          onset: 1,
          onsetSuffix: "Hour",
          diagnosis: ["Cleft palate"],
          noneOps: false,
          phyExam: "phyExamData",
          ops: "OperationData",
          opsDate: new Date().toISOString(),
          opsNote: "Operation Notes",
          bloodLoss: 10,
          opsTime: 10,
          complication: "Complication Data",
          opsOthers: "Other Data",
        },
      ],
      headers: [
        {
          text: "Visited Date",
          value: "visitedDate",
        },
        {
          text: "Case No.",
          value: "cid",
        },
        {
          text: "Diagnosis",
          value: "diagnosis",
        },
        {
          text: "Type",
          value: "type",
        },
        {
          text: "Age",
          value: "age",
        },
        {
          text: null,
        },
      ],
    };
  },
  components: { SearchModule, InfoDialog },
};
</script>
<style>
.fit-width {
  max-width: 300px;
}
</style>

<!-- patientQueryData: {
        firstname: null,
        lastname: null,
        sex: null,
        smoke: null,
        birthDate: new Date(1998, 5, 10),
        ud: null,
      },
      caseQueryData: [
        {
          pid: null,
          visitedDate: null,
          type: null,
          onset: null,
          onsetSuffix: null,
          diagnosis: null,
          noneOps: null,
          phyExam: null,
          ops: null,
          opsDate: null,
          opsNote: null,
          bloodLoss: null,
          opsTime: null,
          complication: null,
          opsOthers: null,
        },
      ], -->

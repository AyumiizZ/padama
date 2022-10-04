<template>
  <div>
    <div class="py-2">
      <h1 class="text-h4 font-weight-bold">New Case Form</h1>
      <v-divider class="my-2" />
    </div>
    <v-card elevation="4">
      <v-row no-gutters>
        <v-text-field
          v-model="pid"
          class="py-2 mx-2"
          label="Registration Number"
          outlined
          hide-details
        />
      </v-row>
      <v-row no-gutters>
        <v-col>
          <vc-date-picker v-model="visitedDate">
            <template v-slot="{ inputValue, inputEvents }">
              <v-text-field
                readonly
                class="py-2 mx-2"
                label="Visited Date"
                :value="inputValue"
                v-on="inputEvents"
                outlined
                hide-details
              />
            </template>
          </vc-date-picker>
        </v-col>
        <v-col>
          <v-select
            v-model="type"
            class="py-2 mx-2"
            :items="typeItems"
            label="Type"
            outlined
            hide-details
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="onset"
            class="py-2 mx-2"
            label="Onset"
            outlined
            hide-details
          />
        </v-col>
        <v-col>
          <v-select
            v-model="onsetSuffix"
            class="py-2 mx-2"
            :items="onsetSuffixItems"
            label="Onset Suffix"
            outlined
            hide-details
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="10">
          <v-autocomplete
            class="py-2 mx-2"
            v-model="diagnosis"
            clearable
            deletable-chips
            :items="diagnosisItems"
            outlined
            chips
            small-chips
            hide-details
            label="Diagnosis"
            multiple
          ></v-autocomplete>
        </v-col>
        <v-col cols="2">
          <v-checkbox
            hide-details
            v-model="noneOps"
            label="None Operations"
            class="py-6 px-0 ma-0"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-textarea
            class="py-2 mx-2"
            v-model="phyExam"
            outlined
            clearable
            rows="1"
            clear-icon="mdi-close-circle"
            label="Physical Examination"
            auto-grow
            row-height="20"
            hide-details
          />
        </v-col>
      </v-row>
      <v-row no-gutters v-if="!noneOps">
        <v-col>
          <v-text-field
            class="py-2 mx-2"
            v-model="ops"
            label="Operation"
            outlined
            hide-details
          />
        </v-col>
        <v-col>
          <vc-date-picker v-model="opsDate">
            <template v-slot="{ inputValue, inputEvents }">
              <v-text-field
                readonly
                class="py-2 mx-2"
                label="Operative Date"
                :value="inputValue"
                v-on="inputEvents"
                outlined
                hide-details
              />
            </template>
          </vc-date-picker>
        </v-col>
      </v-row>
      <v-row no-gutters v-if="!noneOps">
        <v-textarea
          class="py-2 mx-2"
          v-model="opsNote"
          outlined
          clearable
          rows="1"
          clear-icon="mdi-close-circle"
          label="Physical Examination"
          auto-grow
          row-height="20"
          hide-details
        />
      </v-row>
      <v-row no-gutters v-if="!noneOps">
        <v-col>
          <v-text-field
            class="py-2 mx-2"
            v-model="bloodLoss"
            label="Blood Loss"
            suffix="mL"
            outlined
            hide-details
          />
        </v-col>
        <v-col>
          <v-text-field
            class="py-2 mx-2"
            v-model="opsTime"
            label="Operative Time"
            suffix="min"
            outlined
            hide-details
          />
        </v-col>
        <v-col
          ><v-text-field
            class="py-2 mx-2"
            v-model="complication"
            label="Complication"
            outlined
            hide-details
        /></v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-textarea
            class="py-2 mx-2"
            v-model="opsOthers"
            outlined
            clearable
            rows="1"
            no-resize
            clear-icon="mdi-close-circle"
            label="Others"
            auto-grow
            hide-details
          />
        </v-col>
      </v-row>
      <v-row no-gutters class="mx-4 pb-3">
        <v-btn color="error">clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">Create Patient</v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "addCase",
  methods: {
    disableClick(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },
  data() {
    return {
      pid: null,
      visitedDate: null,
      type: null,
      typeItems: ["Tumor", "Non-tumor", "Aesthetic", "Others"],
      onset: null,
      onsetSuffix: null,
      onsetSuffixItems: ["Hours", "Day", "Month", "Year"],
      diagnosis: null,
      diagnosisItems: [
        "Unspecified",
        "Cleft palate",
        "Cleft hard and soft palate with cleft lip",
        "Cleft soft palate",
        "Cleft lip",
        "Cleft hard palate",
      ],
      noneOps: null,
      phyExam: null,
      ops: null,
      opsDate: null,
      opsNote: null,
      bloodLoss: null,
      opsTime: null,
      complication: null,
      opsOthers: null,
    };
  },
};
</script>

<style>
.container--fluid {
  max-width: 1185px;
}
</style>

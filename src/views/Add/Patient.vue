<template>
  <div>
    <div class="py-2">
      <h1 class="text-h4 font-weight-bold">New Patient Form</h1>
      <v-divider class="my-2" />
    </div>
    <v-card elevation="4">
      <v-row no-gutters>
        <v-text-field
          class="py-2 mx-2"
          label="Registration Number"
          outlined
          hide-details
        />
      </v-row>
      <v-row no-gutters>
        <v-col cols="4">
          <v-text-field
            class="py-2 mx-2"
            label="First Name"
            outlined
            hide-details
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            class="py-2 mx-2"
            label="Last Name"
            outlined
            hide-details
          />
        </v-col>
        <v-col cols="4">
          <v-radio-group v-model="sex" row hide-details class="py-6 ma-0 pl-2">
            <template v-slot:label>
              <div>Sex</div>
            </template>
            <v-radio label="Male" value="M"></v-radio>
            <v-radio label="Female" value="F"></v-radio>
            <!-- <v-radio label="Rather Not Say" value="R"></v-radio> -->
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row no-gutters class="py-0 ma-0">
        <v-col cols="2" class="ml-4 py-6 px-0">
          <v-label>Underlying Disease: </v-label>
        </v-col>
        <v-col cols="1">
          <v-checkbox
            hide-details
            v-model="ud"
            value="DM"
            label="DM"
            class="py-6 px-0 ma-0"
          ></v-checkbox
        ></v-col>
        <v-col cols="1">
          <v-checkbox
            hide-details
            v-model="ud"
            value="HT"
            label="HT"
            class="py-6 px-0 ma-0"
          ></v-checkbox
        ></v-col>
        <v-col cols="1">
          <v-checkbox
            hide-details
            v-model="ud"
            value="DLP"
            label="DLP"
            class="py-6 px-0 ma-0"
          ></v-checkbox
        ></v-col>
        <v-col cols="1">
          <v-checkbox
            hide-details
            v-model="ud"
            value="CKD"
            label="CKD"
            class="py-6 px-0 ma-0"
          />
        </v-col>
        <v-col cols="5">
          <v-checkbox
            hide-details
            v-model="other"
            value="other"
            label="other"
            class="pa-0 ma-0"
            @click:label="event.stopPropagation()"
          >
            <template v-slot:label>
              <v-text-field
                v-model="others"
                :disabled="!other"
                label="Others"
                @click="disableClick"
              ></v-text-field>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-radio-group v-model="smoke" row hide-details class="mx-4 pb-6">
          <template v-slot:label>
            <div>Smoking</div>
          </template>
          <v-radio label="Yes" value="true"></v-radio>
          <v-radio label="No" value="false"></v-radio>
        </v-radio-group>
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
  name: "addPatient",
  methods: {
    disableClick(e) {
      e.preventDefault();
      e.stopPropagation();
    },
  },
  data() {
    return {
      sex: null,
      ud: [],
      smoke: null,
      other: null,
      others: null,
    };
  },
};
</script>

<style>
.container--fluid {
  max-width: 1185px;
}
</style>

<template>
  <div class="pb-7">
    <div class="py-2" v-if="title !== null">
      <h1 class="text-h4 font-weight-bold">{{ title }}</h1>
      <v-divider class="my-2" />
    </div>
    <v-card elevation="4">
      <v-row no-gutters>
        <v-col cols="6">
          <v-text-field
            class="py-2 mx-2"
            :label="searchModuleProps.searchKey"
            outlined
            hide-details
            v-if="typeof searchModuleProps.searchKey === 'string'"
          />
          <v-autocomplete
            class="py-2 mx-2"
            v-model="values"
            clearable
            deletable-chips
            :items="searchModuleProps.searchKey.chips"
            outlined
            chips
            small-chips
            hide-details
            :label="searchModuleProps.searchKey.title"
            multiple
            v-if="typeof searchModuleProps.searchKey === 'object'"
          ></v-autocomplete>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <vc-date-picker
            v-model="range"
            mode="dateTime"
            :masks="masks"
            is-range
          >
            <template v-slot="{ inputValue, inputEvents }">
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="5">
                  <v-text-field
                    label="From"
                    outlined
                    hide-details
                    class="py-2 ml-2"
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                  ></v-text-field>
                </v-col>
                <v-icon>mdi-chevron-right</v-icon>
                <v-col cols="5">
                  <v-text-field
                    label="To"
                    outlined
                    hide-details
                    class="py-2 mr-2"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
          </vc-date-picker>
        </v-col>
        <v-col cols="1" align="center" style="padding: 10px 0px">
          <v-menu
            open-on-click
            :close-on-content-click="false"
            v-model="filterMenus"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon x-large class="mx-2" v-bind="attrs" v-on="on">
                <v-icon>mdi-filter</v-icon>
              </v-btn>
            </template>
            <v-card min-width="450px" max-width="550px">
              <v-card-title centered>Filter</v-card-title>
              <v-divider />
              <v-card-subtitle class="pb-0">Quick Select</v-card-subtitle>
              <v-row no-gutters class="py-2 mx-2">
                <v-col cols="5">
                  <v-select
                    :items="filterSuffixItems"
                    v-model="filterSuffix"
                    class="py-2 mx-2"
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="2">
                  <v-text-field
                    class="py-2 mx-2"
                    outlined
                    hide-details
                    v-model="filterValue"
                  />
                </v-col>
                <v-col cols="3">
                  <v-select
                    :items="filterPrefixItems"
                    v-model="filterPrefix"
                    class="py-2 mx-2"
                    outlined
                    hide-details
                  >
                  </v-select>
                </v-col>
                <v-col cols="2" align="center" class="py-2 pr-2">
                  <v-btn width="100%" height="100%" text>Apply</v-btn>
                </v-col>
              </v-row>

              <v-divider />
              <v-card-subtitle class="pb-0">Commonly used</v-card-subtitle>
              <v-list>
                <v-list-item-group dense>
                  <v-list-item
                    v-for="(menu, index) in commonMenus"
                    :key="index"
                    dense
                    @click="calRange(menu.range)"
                    >{{ menu.range }}
                  </v-list-item></v-list-item-group
                >
              </v-list>
            </v-card>
          </v-menu>

          <v-btn icon x-large class="mx-2" @click="testClick">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SearchModule",
  props: {
    title: { type: String, require: true },
    searchModuleProps: { type: Object },
  },
  methods: {
    calRange: function (inputRange) {
      // alert(inputRange);
      console.log("calRange: " + inputRange);
      this.filterMenus = false;
    },
    testClick: function () {
      console.log(this.values);
    },
  },
  data() {
    return {
      commonMenus: [
        { range: "Today" },
        { range: "This Week" },
        { range: "This Month" },
        { range: "This Year" },
        { range: "Last 24 Hours" },
        { range: "Last 7 Days" },
        { range: "Last 1 Month" },
        { range: "Last 1 Year" },
      ],
      filterMenus: false,
      filterSuffix: "Last (from today)",
      filterSuffixItems: ["Last (from today)", "First (of month)"],
      filterValue: 5,
      filterPrefix: "Days",
      filterPrefixItems: [
        "Seconds",
        "Minutes",
        "Hours",
        "Days",
        "Weeks",
        "Months",
        "Years",
      ],
      masks: {
        input: "YYYY-MM-DD h:mm A",
      },
      range: {
        start: new Date(new Date().getTime() - 5 * 60 * 60 * 24 * 1000),
        end: new Date(),
      },
      values: null,
    };
  },
};
</script>

<style>
.v-item-group {
  column-count: 2;
}
</style>

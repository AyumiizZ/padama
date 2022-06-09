<template>
  <v-responsive style="align-items: top !important">
    <div class="py-2">
      <h1 class="text-h4 font-weight-bold">Search by patient ID</h1>
      <v-divider class="my-2" />
    </div>
    <v-card>
      <v-row no-gutters>
        <v-col cols="8">
          <v-text-field
            class="py-2 mx-2"
            label="Registration No."
            outlined
            hide-details
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            class="py-2 mx-2"
            label="Range"
            outlined
            hide-details
            readonly
          />
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
            <v-card max-width="550px">
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

          <v-btn icon x-large class="mx-2"><v-icon>mdi-magnify</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-responsive>
</template>

<script>
export default {
  name: "SearchPIDView",
  methods: {
    submit: function () {
      alert("1111");
    },
    calRange: function (inputRange) {
      // alert(inputRange);
      console.log("calRange: " + inputRange);
      this.filterMenus = false;
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
      filterMenus: true,
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
    };
  },
};
</script>

<style>
.v-item-group {
  column-count: 2;
}
</style>

<template>
  <div class="myGrid">
    <v-card class="orange" color="orange lighten-2" tile flat>
      <v-card-text>Card 1</v-card-text>
    </v-card>
    <v-card class="indigo1" color="indigo lighten-2" dark tile flat>
      <v-card-text>Card 3 Extended To fit</v-card-text>
    </v-card>
    <v-card class="indigo2" color="indigo lighten-2" dark tile flat>
      <v-card-text>Card 3 Extended To fit</v-card-text>
    </v-card>
    <v-card class="indigo3" color="indigo lighten-2" dark tile flat>
      <v-card-text>Card 3 Extended To fit</v-card-text>
    </v-card>
    <v-card class="red" color="red lighten-2" dark tile flat>
      <v-card-text>
        {{ lorem }} {{ lorem }} {{ lorem }}{{ lorem }} {{ lorem }} {{ lorem }}
      </v-card-text>
    </v-card>
    <v-card class="purple" color="purple lighten-1" tile flat>
      <v-card-text>{{ lorem }} {{ lorem }}</v-card-text>
    </v-card>
    <v-card class="green" color="green lighten-2" tile flat>
      <v-card-text>{{ lorem }} {{ lorem }}</v-card-text>
    </v-card>
    <v-card class="blue" color="blue lighten-2" tile flat>
      <v-card-text>{{ lorem }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TestView",
  methods: {},
  data() {
    return {};
  },
};
</script>

<style>
.myGrid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: repeat(3, 1fr) auto auto;
  grid-template-areas:
    "orange indigo1 red"
    "orange indigo2 red"
    "orange indigo3 red"
    "purple green red"
    "purple green blue";
  grid-gap: 0.5rem;
}
</style>

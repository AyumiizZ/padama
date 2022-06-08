<template>
  <v-responsive class="py-6">
    <div class="text-center">
      <h2 class="text-h4 mb-3 font-weight-bold">Your Account</h2>
      <div
        class="mb-4 blue-grey darken-3 mx-auto"
        style="width: 80px; height: 4px"
      />
    </div>
    <v-card class="pa-3 mx-auto" style="max-width: 500px">
      <v-card-title>
        <v-divider />
        <div class="mx-2">Sign In</div>
        <v-divider />
      </v-card-title>
      <v-card-text>
        <v-text-field label="Username" outlined />
        <v-text-field label="Password" type="password" outlined hide-details />
        <v-checkbox
          dense
          v-model="remember"
          :label="`Remember me: ${remember.toString()}`"
        ></v-checkbox>
        <v-btn x-large block color="success"> Sign In </v-btn>
        <div class="text-center mt-4 text-body-2">
          <a href="#"> Forgot your password? </a>
        </div>
      </v-card-text>
    </v-card>
    <!-- <v-row class="mb-4">
      <v-col>
        <h2 class="font-weight-bold text-lg-h2">Sign In</h2>
      </v-col>
    </v-row>
    <v-card flat>
      <v-row>
        <v-col cols="12">
          
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Username"
            background-color="white"
            filled
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card> -->
  </v-responsive>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    remember: false,
  }),
};
</script>

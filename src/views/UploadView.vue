<template>
  <v-responsive>
    <h1>this is upload page</h1>
    <h1>{{ title }}</h1>
    <v-file-input
      counter
      show-size
      truncate-length="15"
      outlined
      small-chips
      v-model="files"
    />
    <v-btn color="primary" @click="uploadFiles">upload</v-btn>
    <v-img
      max-height="300"
      max-width="500"
      :src="imgLink"
      v-if="imgLink !== ''"
    ></v-img>
  </v-responsive>
</template>

<script>
import S3 from "aws-s3";
import { Buffer } from "buffer";
import process from "process";
window.Buffer = Buffer;
export default {
  name: "UploadView",
  computed: {
    config() {
      return {
        bucketName: "padama-data",
        dirName: "img",
        region: "ap-southeast-1",
        accessKeyId: "AKIA4FQETU7V7HIXJWGC",
        secretAccessKey: "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",
        s3Url: "https://padama-data.s3.ap-southeast-1.amazonaws.com",
      };
    },
    S3Client() {
      return new S3(this.config);
    },
  },
  methods: {
    genFileName() {
      return Math.random().toString().slice(2);
    },
    uploadFiles() {
      console.log(this.files);
      this.isLoading = true;
      this.newFileName = this.genFileName();
      this.S3Client.uploadFile(this.files, this.newFileName).finally(() => {
        this.isLoading = false;

        let fileExtension = this.files.type.split("/")[1];
        this.imgLink = `https://padama-data.s3.ap-southeast-1.amazonaws.com/img/${this.newFileName}.${fileExtension}`;
        this.files = [];
      });
    },
  },
  data() {
    return {
      isLoading: false,
      files: [],
      imgLink: "",
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>

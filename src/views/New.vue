<template>
  <div>
    <div class="container">
      <div class="tempx">
        <h1>Create A Story</h1>
      </div>
      <b-form @submit.stop.prevent>
        <b-input
          v-model="title"
          size="lg"
          id="Title"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Title"
        ></b-input>

        <b-textarea rows="9" class="tmpx" v-model="body" size="lg" id="Body" placeholder="Body"></b-textarea>

        <b-form-file
          v-model="image"
          class="tmpx"
          :state="Boolean(image)"
          placeholder="Choose an image or drop it here"
          drop-placeholder="Drop image here..."
        ></b-form-file>

        <!-- <div class="mt-3">Selected file: {{ image ? image.name : '' }}</div> -->

        <b-button class="tmpx" @click="submitButton">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "New",
  components: {},
  data() {
    return {
      stories: [],
      title: null,
      body: null,
      image: null
    };
  },
  methods: {
    submitButton() {
      if (!this.title || !this.body) {
        this.$swal(
          "Invalid Length",
          "Please input at least one character in each field",
          "error"
        );
        return;
      }

      if (!this.image) {
        this.$swal("Invalid Image", "Please input a valid Image", "error");
        return;
      }

      let token = localStorage.getItem("token");
      let formData = new FormData();
      let data = {
            title: this.title,
            body: this.body
      }

      formData.append('data', new Blob([JSON.stringify(data)], {
                    type: "application/json"
                }));
      formData.append("file", this.image);

      axios
        .post(
          "http://localhost:8080/story",
          formData,
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        )
        .then(() => {
          this.title = "";
          this.body = "";
          this.image = "";
          this.$swal(
            "Created",
            "You successfully created this story",
            "success"
          );
        })
        .catch(() => {
          this.$swal("Error");
        });

    }
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    }
  },
  created() {}
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  padding-bottom: 200px;
}

.tmpx {
  margin-top: 25px;
}

.posx {
  margin: 0 auto;
  max-width: 700px;
  height: 100px;
  border-radius: 3px;
  margin-top: 80px;
  margin-bottom: 100px;
}

.display-4x {
  margin-top: 0px;
  text-align: center;
  width: 900px;
}

.tempx {
  margin-bottom: 40px;
  margin-left: 400px;
}
</style>

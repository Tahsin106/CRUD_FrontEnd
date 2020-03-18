<template>
  <div id = "login">
    <div class = "container" align = center style = "padding-top: 20px">

      <h1> Login Into Your Account </h1>
      <b-form style = "width: 50%" align = center>

        <b-input-group style = "margin-top: 35px" size = "lg" prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model = "username" id="inline-form-input-username" placeholder="Username"></b-input>
        </b-input-group>

        <b-input-group style = "margin-top: 15px" size = "lg" prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model = "password" type = "password" id="inline-form-input-username" placeholder="Password"></b-input>
        </b-input-group>

        <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->

        <b-button size = "lg" @click = "loginButton" style = "margin-top: 15px">Login</b-button>
      </b-form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      stories: [],
      username: null,
      password: null
    };
  },
  methods: {
    loginButton() {
      if (this.username.length == 0 || this.password.length == 0) {
        alert("Invalid Length");
        return;
      }

      axios
        .post("http://localhost:8080/authenticate", {
          username: this.username,
          password: this.password
        })
        .then((response) => {

          localStorage.setItem('user',this.username);
          

          //alert(response.data.jwtToken)

          localStorage.setItem('token',response.data.jwtToken)
          
          this.$store.commit('addToken',this.$store.state)

          this.$swal('Welcome '+this.username)

          this.username = "";
          this.password = "";
          
          this.$router.push('/')
        })
        .catch(() => {
          alert("INVALID LOGIN");
          this.username = '';
          this.password = '';
        });

        
    }
  },
  computed: {
    //   validation() {
    //     //return this.userId.length > 4 && this.userId.length < 13
    //   }
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
</style>
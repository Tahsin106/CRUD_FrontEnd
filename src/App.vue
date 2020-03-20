<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <!-- <b-collapse id="nav-collapse" is-nav> -->
        <b-navbar-nav>
          <b-nav-item @click="homeButton">
            <font size="3">Home</font>
          </b-nav-item>

          <b-nav-item v-if="newFlag" @click="newButton">
            <font size="3">New</font>
          </b-nav-item>
          <b-nav-item v-else @click="registerButton">
            <font size="3">Register</font>
          </b-nav-item>

          <b-nav-item v-if="newFlag" @click="logoutButton" ref="#">
            <font size="3">Logout</font>
          </b-nav-item>
          <b-nav-item v-else @click="loginButtonClicked">
            <font size="3">Login</font>
          </b-nav-item>

          <!-- <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if= "tmpFlag" right>
            <font size="3">Welcome {{$store.state.user}}</font>
          </b-nav-item>
        </b-navbar-nav>

        
      </b-navbar>


    </div>

    <div class="display-4" align="center">
      <b-jumbotron header="Cefalo News Portal"></b-jumbotron>
    </div>

    <!-- <h1 class="display-4">Cefalo News Portal</h1> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      stories: []
      // newFlag: false,
      // logoutFlag: false
    };
  },
  methods: {
    homeButton() {
      this.$router.push("/");
    },
    newButton() {
      this.$router.push("/new");
    },
    registerButton() {
      this.$router.push("/register");
    },
    loginButtonClicked() {
      this.$router.push("/login");
    },
    logoutButton() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$store.commit("addToken", this.$store.state);
      this.$swal('Logged Out', 'You successfully logged out', 'success')
      this.$router.push("/login");
    }
  },
  created() {
    //this.$store.commit('addToken',this.$store.state)
  },
  computed: {
    newFlag() {
      this.$store.commit("addToken", this.$store.state);
      //alert("THIS: " + this.$store.state.token)
      return this.$store.state.token;
    },
    tmpFlag(){
      this.$store.commit("addToken", this.$store.state);
      //alert("THIS: " + this.$store.state.token)
      return this.$store.state.user;
    }
  }
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
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}

.pos {
  padding-left: 30px;
  padding-top: 40px;
  padding-bottom: 100px;
}

.custom {
  margin-right: auto;
}

.display-4 {
  padding-top: 0px;
  text-align: center;
}

.temp {
  display: float;
  float: right;
}
</style>

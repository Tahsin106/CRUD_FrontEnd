<template>
  <div id="app">

    <div>
      <b-navbar type="dark" variant="dark">
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item @click = "homeButton"><font size = "3"> Home  </font></b-nav-item>

            <b-nav-item v-if = "newFlag" @click = "newButton"><font size = "3"> New </font></b-nav-item>
            <b-nav-item v-else @click = "registerButton"><font size = "3"> Register </font></b-nav-item>

            <b-nav-item v-if = "logoutFlag" @click = "logoutButton" ref="#"><font size = "3"> Logout </font></b-nav-item>
            <b-nav-item v-else @click = "loginButtonClicked"><font size = "3"> Login </font></b-nav-item>
            
          <!-- <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown> -->

        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      
    </div>

    <div class = "display-4" align = center>
      <b-jumbotron  header="Cefalo News Portal">
      </b-jumbotron>
    </div>
    
    <!-- <h1 class="display-4">Cefalo News Portal</h1> -->
    
    <router-view />
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      stories:[]
      // newFlag: false,
      // logoutFlag: false
    }
  },
  methods:{
    homeButton(){
        this.$router.push('/')
    },
    newButton(){
        this.$router.push('/new')
    },
    registerButton(){
        this.$router.push('/register')
    },
    loginButtonClicked(){
        this.$router.push('/login')
    },
    logoutButton(){
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
  },
  created(){
    
  },
  computed:{
    newFlag(){
      //alert(localStorage.getItem('token'))
      if(localStorage.getItem('token')==null) return false;
      else return true;
    },
    logoutFlag(){
      if(localStorage.getItem('token')==null) return false;
      else return true;
    }
  }
}
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

  .pos{
    padding-left: 30px;
    padding-top: 40px;
    padding-bottom: 100px;
  
  }

  .display-4{
    padding-top: 0px;
    text-align: center; 
  }

  .temp{
    display: float;
    float: right;
  }



</style>

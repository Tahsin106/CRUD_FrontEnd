<template>
  <div>
    
    <div class = "container">
        <div class  = "tempx"> <h1>Create A Story</h1> </div>
          <b-form @submit.stop.prevent>
            <!-- <label class="sr-only" for="inline-form-input-name">Name</label> -->

            <!-- <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0"> -->
              
            <b-input v-model = "title" size = "lg" id="Title" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Title"> </b-input>

            <!-- </b-input-group> -->
        
            <!-- <label class="sr-only" for="inline-form-input-username">Username</label> -->
            <!-- <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0"> -->
            <b-textarea rows = "9" class = "tmpx" v-model = "body" size = "lg" id="Body"  placeholder="Body"></b-textarea>
            <!-- </b-input-group> -->

            <b-button class = "tmpx" @click = "submitButton">Submit</b-button>

            <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->

           
          </b-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  
  name: 'New',
  components: {
    
  },
  data(){
    return {
      stories:[],
      title:null,
      body:null
    }
  },
  methods:{
    submitButton(){
        
        if(this.title.length==0 || this.body.length==0){
          alert("Invalid Length")
          return
        }

        let token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0YXJhbiIsImV4cCI6MTU4NDM0ODExNCwiaWF0IjoxNTg0MzEyMTE0fQ.fTI3AJpeP_tumbgkyZoBRtdwfxMD_EiG4gci7WB8Ucg'

        axios.post('http://localhost:8080/story',{
          title: this.title,
          body: this.body
        },
          {
            headers: {
              Authorization: 'Bearer '+token
            }
          }
        )
        .then(() => {
          this.title = ''
          this.body = ''
          alert('Successfully Posted')
        })
        .catch(() => {
          alert("ERORR")
        });
    }
  },
  computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
  },
  created(){
      
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
    padding-bottom: 200px;
  }

  .tmpx{
    margin-top: 25px;
  }


  .posx{
    margin: 0 auto;
    max-width: 700px;
    height: 100px;
    border-radius: 3px;
    margin-top: 80px;
    margin-bottom: 100px;
  
  }

  .display-4x{
    margin-top: 0px;
    text-align: center; 
    width: 900px;
  }

  .tempx{
    margin-bottom: 40px;
    margin-left: 400px;
  }

</style>

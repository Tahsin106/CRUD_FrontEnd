<template>
  <div id>
    
    <div class = "container">
        <select>
          <option>
            Option1
          </option>
        </select>
        <div class  = "tempx"> <h1>Edit A Story</h1> </div>
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
  
  name: 'Edit',
  components: {
    
  },
  props: ['id'],
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
          this.$swal('Invalid Length', 'Please input at least one character in each field', 'error')
          return
        }

        let token = localStorage.getItem('token')
        
        axios.put('http://localhost:8080/story',{
          id: this.id,
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
          this.$swal('Edited', 'You successfully edited this story', 'success')
          this.$router.push('/')
        })
        .catch(() => {
          this.$swal("Forbidden")
        });
    }
  },
  computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
  },
  created(){
      axios
        .get(
          "http://localhost:8080/story/"+this.id
        )
        .then(res => {
            this.title = res.data.title;
            this.body = res.data.body;
        })
        .catch(err => console.log(err));
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

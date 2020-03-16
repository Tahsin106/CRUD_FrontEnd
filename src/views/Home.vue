<template>
  <div id>
    <Stories class = "pos" align = center v-bind:stories="stories"/>
  </div>
</template>

<script>

import Stories from '../components/Stories'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Stories
  },
  data(){
    return {
      stories:[]
    }
  },
  created(){
    axios.get('http://localhost:8080/story')
    .then(res => this.stories = res.data)
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
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom: 100px;
  
  }

  .display-4{
    margin-top: 0px;
    text-align: center; 
  }

  .temp{
    display: float;
    float: right;
  }



</style>

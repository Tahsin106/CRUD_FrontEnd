<template>
  <div id>

    <div class = "container">
      <Stories class="pos" align="center" />
    </div>

  </div>
</template>

<script>
import Stories from "../components/Stories";

export default {
  name: "Home",
  components: {
    Stories
  },
  data() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {
    
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
  margin-left: 10px;
  margin-top: 40px;
  margin-bottom: 100px;
}

.display-4 {
  margin-top: 0px;
  text-align: center;
}

.temp {
  display: float;
  float: right;
}
</style>

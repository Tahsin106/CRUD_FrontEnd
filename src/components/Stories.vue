<template>
<div>
    <div v-bind:key="story.id" v-for="story in stories">
        <div align = left class="card" style="width: 70rem;">
            <div class="card-body">
                <h2 class="card-title">{{story.title}}</h2>
                <p class="card-text">{{story.body}}</p>
                <!-- <a href="#" class="btn">Go somewhere</a> -->
            
                <input type="submit" value = "Edit" class = "btn" size = 3>

                <span class = "tmp">
                    <input type="submit" value = "Delete" class = "btn" size = 3>
                </span>
                
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
name: "Stories",
props: ["stories"],
data(){
    return {
      seen: true
    }
},
methods:{
    editClick(){
        this.$router.push('/about')
    }
}

  
}

</script>

<style scoped>

.action {
    /* display: flex; */
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.tmp{
    padding-left: 7px;
}

</style>
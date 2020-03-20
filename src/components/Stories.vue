<template>
  <div>
    <div v-bind:key="story.id" v-for="story in stories">
      <div align="left" class="card" style="width: 66rem;">
        <div class="card-body">
          <h2 class="card-title">{{story.title}}</h2>
          <p class="card-text">{{story.body}}</p>
          <!-- <a href="#" class="btn">Go somewhere</a> -->

          <tr>
            <td>
              <input
                type="submit"
                @click="editClick(story.id)"
                v-if="buttonVisible(story.blogUser.username)"
                value="Edit"
                class="btn"
                size="3"
              />
            </td>
            <td>
              <span class="tmp">
                <input
                  type="submit"
                  @click="deleteClickCheck(story.id)"
                  v-if="buttonVisible(story.blogUser.username)"
                  value="Delete"
                  class="btn"
                  size="3"
                />
              </span>
            </td>

            <td v-if="buttonVisible(story.blogUser.username)" style="padding-left: 620px">
              <p class="card-text">Posted By {{story.blogUser.username}} at {{story.date}}</p>
            </td>

            <td v-else style="padding-left: 780px">
              <p class="card-text">Posted By {{story.blogUser.username}} at {{story.date}}</p>
            </td>


          </tr>
        </div>
      </div>
    </div>
    <!-- <div class="mt-3"> -->
    <div class="mt-3">
      <b-pagination
        align="center"
        @input="paginationCalled"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Stories",
  data() {
    return {
      stories: [],
      seen: true,
      currentPage: 1,
      rows: 50,
      perPage: 1,
      pageSize: 3
    };
  },
  created() {
    //alert(localStorage.getItem('token'))\

    var pageNumber = this.currentPage - 1;

    axios
      .get(
        "http://localhost:8080/story?num=" +
          pageNumber +
          "&size=" +
          this.pageSize
      )
      .then((res) => {
        this.stories = res.data.content
        this.rows = (res.data.totalElements / this.pageSize) + ((res.data.totalElements % this.pageSize)!=0)
        console.log(res)
      })
      .catch(err => console.log(err));
  },
  computed: {},
  methods: {
    deleteClickCheck(id){

        this.$swal({
          title: 'Are you sure?',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          showLoaderOnConfirm: true
        }).then((result) => {
           if(result.value) {
            this.deleteClick(id)
          } 
        })
    },
    deleteClick(id) {
      let token = localStorage.getItem("token");

      axios
        .delete("http://localhost:8080/story/" + id, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(() => {
          this.$swal('Deleted', 'You successfully deleted this story', 'success')
          var pageNumber = this.currentPage - 1;

          axios
            .get(
              "http://localhost:8080/story?num=" +
                pageNumber +
                "&size=" +
                this.pageSize
            )
            .then(res => {
              this.stories = res.data.content
              this.rows = (res.data.totalElements / this.pageSize) + ((res.data.totalElements % this.pageSize)!=0)
              })
            .catch(err => console.log(err));
        })
        .catch(() => {
          this.$swal('Forbidden')
        });
    },
    editClick(id) {
      this.$router.push("/edit/" + id);
    },
    paginationCalled() {
      var pageNumber = this.currentPage - 1;

      axios
        .get(
          "http://localhost:8080/story?num=" +
            pageNumber +
            "&size=" +
            this.pageSize
        )
        .then(res => (this.stories = res.data.content))
        .catch(err => console.log(err));
    },
    buttonVisible(username) {
      this.$store.commit("addToken", this.$store.state);
      return this.$store.state.user == username;
    }
  }
};
</script>

<style scoped>
.action {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.tmp {
  padding-left: 7px;
}
</style>
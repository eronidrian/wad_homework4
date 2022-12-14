<template>
  <div class="backgroundCard">
    <div class="modifyPostCard">
      <div>
        <h3>Modify post</h3>
      </div>
      <div>
        <form id="modifyPostForm" method="post" action="javascript:void(0);">

          <label for="postBody">Post body</label><br>
          <input v-model="postBody" type="text" id="postBody" placeholder="Post Body"><br>
          <button @click=this.updatePost>Update post</button> <button @click=this.deletePost>Delete post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modifyPostForm",
  props: ["postId"],
  created() {
    this.getPost(this.postId);
  },
  data() {
    return {
      postBody: null,
    }
  },
  methods: {
    getPost() {
      fetch("http://localhost:3000/api/posts/" + this.postId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            this.postBody = data.body;
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
    updatePost() {
      var data = {
        id: this.postId,
        body: this.postBody,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
    deletePost() {
      fetch("http://localhost:3000/api/posts/" + this.postId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then(() => {
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}

.backgroundCard {
  border-radius: 5px;
  background-color: darkgray;
  margin: 10px;
  padding: 5px;

}

input {
  margin: 5px;
  height: 5rem;
  word-break: break-all;

}

.modifyPostCard {
  background-color: rgba(66, 185, 131, 0.95);
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 10px;
}

label {
  display: inline-block;
  width: 80px;
  text-align: right;
}



</style>

<template>
  <div class="backgroundCard">
    <div class="addPostCard">
      <div>
        <h3>Add post</h3>
      </div>
      <div>
        <form>

          <label for="postBody">Post body</label><br>
          <input v-model="post.body" type="text" id="postBody" placeholder="Post Body"><br>
          <button @click="addPost">Add post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addPostForm",
  data() {
    return {
      post: {
        body: "",
        date: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        body: this.post.body,
        create_time: new Date(),
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            console.log(response.data);
            // redirect to /allposts view
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
};
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

.addPostCard {
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

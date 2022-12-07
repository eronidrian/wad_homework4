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
          <button type="submit">Update post</button> <button type="submit">Delete post</button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modifyPostForm",
  methods: {

  },
  data() {
    return {
      postBody: null,
    }
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
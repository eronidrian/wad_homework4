<template>
  <div class="mainContainer">
    <div class="mainDiv">
      <div class="side"></div>
      <div id="mainBody">
        <button v-if = "authResult" @click="Logout" class="center">Logout</button>
        <div v-for="post in posts" :key="post.id">
          <post-component :post="post" @click='this.$router.push("/modify_post")'></post-component>
        </div>
        <div class="buttons">
          <button @click='this.$router.push("/add_post")'>Add Post</button>
          <button>Delete all</button>
        </div>
      </div>
      <div class="side"></div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import PostComponent from "@/components/Post";
import Footer from "@/components/Footer";
import auth from "../auth";

export default {
  name: 'HomeView',
  components: {
    Header,
    PostComponent,
    Footer,
  },
  data: function() {
    return {
      posts:[ ],
      authResult: auth.authenticated()
    }
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.posts = data;
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            //console.log('jwt removed:' + auth.authenticated());
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: monospace;
  border-radius: 5px;
}

body {
  line-height: 1.6;
  margin: 0;
}

.mainContainer {
  display: flex;
  flex-flow: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 1em;
}

.mainDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 2;
}

#mainBody {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.side {
  display: flex;
  flex-grow: 1;
  margin-top: .5em;
  background-color: lightgrey;
}

.buttons {
  display: flex;
  flex-direction: row;
}

@media (max-width: 800px) {
  .side {
    display: none;
  }
  .mainDiv {
    justify-content: center;
  }

}
</style>

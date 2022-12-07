<template>
  <Header></Header>
  <router-view id="app"></router-view>
  <Footer></Footer>
</template>

<style>

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 5px;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Header}
}
</script>

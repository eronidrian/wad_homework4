<template>
  <div class="header">
    <h1>PostIT 3.0</h1>
    <nav>
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="sign_up_login">
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Sign Up</router-link>

      </div>


    </nav>
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  border-radius: 5px;
  background-color: lightgray;
  margin: 10px;
  padding: 5px;

}

nav {
  display: flex;
  flex-direction: row;
}

.sign_up_login {
  margin-left: auto;
  margin-right: 0;
  background-color: darkgray;
  padding: 5px;
}

</style>
<template>
  <div class="backgroundCard">
    <div class="loginCard">
      <form>

        <label for="email">Email</label><input required v-model="email" type="email" id="email" placeholder="Email"><br>
        <label for="password">Password</label><input required v-model="password" type="password" id="password" placeholder="Password"><br>
        <button @click="LogIn">Login</button>
      </form>
      <div>
        <p>You don't have account yet? <router-link to="/signup">Sign up here!</router-link></p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  methods: {

    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            //this.$router.push("/");
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },

  data: function() {
    return {
      email: '',
      password: '',
    }
  },

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
  height: 1.7rem;

}

.loginCard {
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
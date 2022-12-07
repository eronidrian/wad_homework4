<template>
  <div class="backgroundCard">
    <div class="signUpCard">
      <form>
        <label for="email">Email</label><input required v-model="email" type="email" id="email" placeholder="Email"><br>
        <label for="password">Password</label><input required v-model="password" type="password" id="password" placeholder="Password"><br>
        <button @click="SignUp">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {

    SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
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
            this.$router.push("/");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
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

.signUpCard {
  background-color: rgba(66, 185, 131, 0.95);
  width: fit-content;
  display: flex;
  margin: auto;
  padding: 10px;
}

label {
  display: inline-block;
  width: 80px;
  text-align: right;
}



</style>
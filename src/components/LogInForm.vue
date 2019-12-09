<template>
  <div class="hero p-4 m-0" style="width: 35%">
    <h1 class="text-center">Log In</h1>
    <form @submit.prevent="validateForm">
      <div class="bg-danger" v-if="error">{{error}}</div>
      <!-- TODO: Allow login with username -->
      <!-- <div class="form-group">
        <label for="username-input">Username</label>
        <input
          type="text"
          class="form-control"
          id="username-input"
          placeholder="Your username"
          v-model="username"
        />
      </div>-->
      <div class="form-group">
        <label for="email-input">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email-input"
          aria-describedby="emailHelp"
          placeholder="Your email"
          v-model="userEmail"
        />
      </div>
      <div class="form-group">
        <label for="password-input">Password</label>
        <input
          type="password"
          class="form-control"
          id="password-input"
          placeholder="Your password"
          v-model="userPassword"
        />
      </div>

      <div class="text-left">
        <button type="submit" class="btn btn-success btn-lg mr-3">Log In</button>
        Don't have an account?
        <router-link to="signup">Sign Up</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase";
import ROUTES from "../constants/constants";

export default {
  name: "LogInForm",
  data: function() {
    return {
      userEmail: "",
      userPassword: "",
      error: null
    };
  },
  methods: {
    validateForm: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userEmail, this.userPassword)
        .then(() => {
          this.userEmail = "";
          this.userPassword = "";
          this.$router.push(ROUTES.PROFILE);
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped>
.hero {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: rgba(233, 236, 239, 0.7);
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .hero {
    padding: 4rem 2rem;
  }
}
</style>
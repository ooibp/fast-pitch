<template>
  <div class="hero p-4 m-0" style="width: 35%">
    <h1 class="text-center">Sign Up</h1>
    <form @submit.prevent="validateForm">
      <div class="form-group">
        <label for="username-input">Username</label>
        <input
          type="text"
          class="form-control"
          id="username-input"
          placeholder="Your username"
          v-model="username"
          @change="validateUsername"
        />
        <small
          class="form-text text-danger"
          v-show="usernameIsNotValid"
        >Username cannot be less than 6 characters</small>
      </div>
      <div class="form-group">
        <label for="email-input">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email-input"
          aria-describedby="emailHelp"
          placeholder="Your email"
          v-model="userEmail"
          @change="validateEmail"
        />
        <small class="form-text text-danger" v-show="emailIsNotValid">Please enter a valid email</small>
      </div>
      <div class="form-group">
        <label for="password-input">Password</label>
        <input
          type="password"
          class="form-control"
          id="password-input"
          placeholder="Your password"
          v-model="userPassword"
          @change="validatePassword"
        />
        <small
          class="form-text text-danger"
          v-show="passwordIsNotValid"
        >Password cannot be less than 8 characters</small>
      </div>
      <div class="form-group">
        <label for="confirm-password-input">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirm-password-input"
          placeholder="Confirm your password"
          v-model="userCPassword"
          @change="validateCPassword"
        />
        <small class="form-text text-danger" v-show="cPasswordIsNotValid">Passwords do not match</small>
      </div>

      <div class="text-right">
        <button type="submit" class="btn btn-success btn-lg">Create</button>
      </div>
    </form>
    <p class="text-center">
      Already have an account? <router-link to="/login">Log In</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data: function() {
    return {
      username: "",
      userEmail: "",
      userPassword: "",
      userCPassword: "",
      usernameIsNotValid: false,
      emailIsNotValid: false,
      passwordIsNotValid: false,
      cPasswordIsNotValid: false
    };
  },
  methods: {
    validateUsername: function() {
      this.usernameIsNotValid = this.username.length < 6;
    },
    validateEmail: function() {
      var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // Regex for email validation
      this.emailIsNotValid = !re.test(this.userEmail);
    },
    validatePassword: function() {
      this.passwordIsNotValid = this.userPassword.length < 8;
    },
    validateCPassword: function() {
      this.cPasswordIsNotValid = this.userPassword !== this.userCPassword;
    },
    validateForm: function() {
      if (
        this.username &&
        this.userEmail &&
        this.userPassword &&
        this.userCPassword &&
        !(
          this.usernameIsNotValid &&
          this.emailIsNotValid &&
          this.passwordIsNotValid &&
          this.cPasswordIsNotValid
        )
      ) {
        alert("Success!");
        /* TODO: Submit form to create new user */
        this.username = "";
        this.userEmail = "";
        this.userPassword = "";
        this.userCPassword = "";
        return;
      }
      this.validateUsername();
      this.validateEmail();
      this.validatePassword();
      this.validateCPassword();
      return;
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
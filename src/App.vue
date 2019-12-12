<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg sticky-top">
      <router-link :to="HOME" class="navbar-brand">Fast Pitch</router-link>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="ABOUT" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="SIGNUP" class="nav-link" v-if="!user.loggedIn">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="LOGIN" class="nav-link" v-if="!user.loggedIn">Log In</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="PROFILE" class="nav-link" v-if="user.loggedIn">{{user.data.email}}</router-link>
        </li>
        <li class="nav-item">
          <span style="cursor: pointer;" class="nav-link" @click='logout' v-if="user.loggedIn">Logout</span>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import ROUTES from "./constants/constants";
import * as firebase from 'firebase';
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      ...ROUTES,
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    })
  },
  methods:{
    logout: function () {
      // TODO: Check path before redirect
      firebase.auth().signOut().then(() => this.$router.replace(ROUTES.HOME)).catch(err => {alert(err)});
    }
  }
};
</script>

<style>
html,
body,
#app {
  min-width: 100%;
  min-height: 100vh;
}

#nav {
  background-color: #00c853;
}

#nav .nav-link,
#nav .navbar-brand {
  color: #fafafa;
}
</style>

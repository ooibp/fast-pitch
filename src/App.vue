<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg sticky-top">
      <router-link :to="HOME" class="navbar-brand">Fast Pitch</router-link>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="ABOUT" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="SIGNUP" class="nav-link">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="LOGIN" class="nav-link">Log In</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="PROFILE" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="HOME" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import ROUTES from "./constants/constants";

export default {
  data: function() {
    return {
      ...ROUTES,
    };
  },
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

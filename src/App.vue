<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg sticky-top">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <ul class="navbar-nav  ml-auto">
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/logout" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
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

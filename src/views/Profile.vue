<template>
  <h1>{{user.data.displayName}}</h1>
</template>

<script>
// import * as firebase from 'firebase';
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  beforeCreate: function() {
    document.body.className = "";
  }
};
</script>

<style scoped>
</style>
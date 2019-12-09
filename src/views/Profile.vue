<template>
  <h1>{{username}}</h1>
</template>

<script>
import * as firebase from 'firebase';

export default {
    name: "Profile",
    data: function () {
        return {
            username: firebase.auth().currentUser.email
        }
    }
}
</script>

<style scoped>

</style>
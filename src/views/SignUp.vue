<template>
  <div class="d-flex flex-column align-items-end mt-5">
    <SignUpForm class="mr-5" />
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";

export default {
  name: "SignUp",
  components: {
    SignUpForm
  },
  beforeCreate: function() {
    document.body.className = "signup";
  }
};
</script>

<style scoped>
</style>
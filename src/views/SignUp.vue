<template>
  <transition name="slide" appear>
    <div class="d-flex flex-column align-items-end mt-5">
      <SignUpForm class="mr-5" />
    </div>
  </transition>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";

export default {
  name: "SignUp",
  components: {
    SignUpForm
  },
  data: function() {
    return {
      entry: false
    };
  },
  beforeCreate: function() {
    document.body.className = "sign";
  },
};
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.8s ease;
}

.slide-enter {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-enter-to {
  opacity: 1;
}
</style>
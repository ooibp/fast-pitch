<template>
  <transition name="slide" appear="true">
    <div class="d-flex flex-column align-items-start mt-5">
      <LogInForm class="ml-5" />
    </div>
  </transition>
</template>

<script>
import LogInForm from "../components/LogInForm.vue";

export default {
  name: "LogIn",
  components: {
    LogInForm
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
  transform: translateX(20px);
  opacity: 0;
}

.slide-enter-to {
  opacity: 1;
}
</style>
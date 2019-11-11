<template>
  <div class="grid-container">
    <div v-for="pitch in pitches" :key="pitch.id">
      <div class="card-body">
        <h5 class="card-title">{{pitch.title}}</h5>
        <p class="card-text">{{pitch.body}}</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PitchGrid",
  props: ["pitches"]
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 1%;
}

.grid-item {
}
</style>
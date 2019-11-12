<template>
  <div class="grid-container">
    <div v-for="pitch in pitches" :key="pitch.id">
      <div class="grid-item position-relative shadow">
        <h5 class="pitch-title p-2">{{pitch.title}}</h5>
        <div :title="pitch.body" class="pl-3 pb-3 pr-3">
          <p class="pitch-body">{{pitch.body}}</p>
        </div>
        <div class="icon">
          <i class="fas fa-heart fa-lg"></i>
          {{pitch.likes}}
        </div>
        <a href="#" class="streched-link">More>></a>
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
  grid-template-rows: 200px 200px 200px;
  grid-gap: 5%;
}

.grid-item {
  min-height: 100%;
  background-color: #69f0ae;
}

.grid-item > a {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.grid-item > .icon {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.grid-item > .icon > i {
  color: #ff5252;
  cursor: pointer;
}

.pitch-title {
  background-color: #00e676;
}

/* For ellipsis after three lines */
.pitch-body {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
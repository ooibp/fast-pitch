<template>
  <div class="px-5">
    <h5 class="text-center">Top liked</h5>
    <ul class="list-group px-5">
      <li
        v-for="pitch in sortedPitches"
        :key="pitch.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <a href="#" class="text-body">{{pitch.title}}</a>
        <span class="badge badge-success badge-pill">{{pitch.likes}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LikedList",
  props: ["pitches"],
  data() {
    return {
      sortedPitches: this.pitches.sort((a, b) => (b.likes - a.likes)).slice(0, 5)
    }
  }
};
</script>

<style scoped>
</style>
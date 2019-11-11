<template>
  <div class="home">
    <div class="row mt-5">
      <div id="pitch-list" class="col-12 col-md-8">
        <PitchGrid :pitches="pitchList" />
      </div>
      <div id="top-list" class="col-12 col-md-4"></div>
    </div>
  </div>
</template>

<script>
import PitchGrid from "../components/PitchGrid";

export default {
  name: "home",
  components: {
    PitchGrid,
  },
  data() {
    return {
      pitchList: [
        {
          userId: 1,
          id: 1,
          title: "Pitch Number One",
          body: "Pitch one body blah blah blah blah blah blah blah blah blah"
        },
        {
          userId: 1,
          id: 2,
          title: "Pitch Number Two",
          body: "Pitch two body blah blah blah"
        },
        {
          userId: 1,
          id: 3,
          title: "Pitch Number Three",
          body: "Pitch three body blah blah blah blah blah"
        },
        {
          userId: 1,
          id: 4,
          title: "Pitch Number Four",
          body: "Pitch four body blah blah blah"
        }
      ]
    };
  }
};
</script>

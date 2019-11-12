<template>
  <div class="home">
    <div class="row mt-5">
      <div class="col-12 col-md-2"></div>
      <div id="pitch-list" class="col-12 col-md-6">
        <PitchGrid :pitches="pitchList" />
      </div>
      <div id="top-list" class="col-12 col-md-4">
        <LikedList :pitches="pitchList" />
      </div>
    </div>
  </div>
</template>

<script>
import PitchGrid from "../components/PitchGrid";
import LikedList from "../components/LikedList";

export default {
  name: "home",
  components: {
    PitchGrid,
    LikedList,
  },
  data() {
    return {
      pitchList: [
        {
          userId: 1,
          id: 1,
          title: "Pitch Number One",
          body: "Pitch one body blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
          likes: 123,
        },
        {
          userId: 1,
          id: 2,
          title: "Pitch Number Two",
          body: "Pitch two body blah blah blah",
          likes: 13,
        },
        {
          userId: 1,
          id: 3,
          title: "Pitch Number Three",
          body: "Pitch three body blah blah blah blah blah",
          likes: 23,
        },
        {
          userId: 1,
          id: 4,
          title: "Pitch Number Four",
          body: "Pitch four body blah blah blah",
          likes: 1,
        },
        {
          userId: 1,
          id: 5,
          title: "Pitch Number One",
          body: "Pitch one body blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
          likes: 13,
        },
        {
          userId: 1,
          id: 6,
          title: "Pitch Number Two",
          body: "Pitch two body blah blah blah",
          likes: 3,
        },
        {
          userId: 1,
          id: 7,
          title: "Pitch Number Three",
          body: "Pitch three body blah blah blah blah blah",
          likes: 2,
        },
        {
          userId: 1,
          id: 8,
          title: "Pitch Number Four",
          body: "Pitch four body blah blah blah",
          likes: 123,
        },
      ]
    };
  }
};
</script>

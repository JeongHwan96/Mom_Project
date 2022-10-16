<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1920"
      img-height="1080"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <a href="/arsenal"
        ><b-carousel-slide
          img-src="@/assets/weekly/arsnalmain.jpg"
        ></b-carousel-slide
      ></a>
      <a href="/arsenal"
        ><b-carousel-slide
          img-src="@/assets/weekly/arsnalmain2.jpg"
        ></b-carousel-slide
      ></a>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
.sr-only {
  display: none;
}
</style>

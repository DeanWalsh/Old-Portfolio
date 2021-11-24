<template>
  <div class="slider-container">
    <div class="slider-title">
      <h1>{Name} Photography</h1>
    </div>
    <transition-group name="fade" mode="out-in" tag="div" class="slider">
      <div v-for="i in [currentIndex]" :key="i" class="slide">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <div class="buttons">
      <i @click="next" class="fas fa-chevron-left fa-5x" id="prev"></i>
      <i @click="prev" class="fas fa-chevron-right fa-5x" id="next"></i>
    </div>
  </div>
</template>


<script>

import img1 from "../assets/img/slider/ales-krivec-4miBe6zg5r0-unsplash.jpg"
import img2 from "../assets/img/slider/bailey-zindel-NRQV-hBF10M-unsplash.jpg"
import img3 from "../assets/img/slider/ken-cheung-KonWFWUaAuk-unsplash.jpg"
import img4 from "../assets/img/slider/mark-harpur-K2s_YE031CA-unsplash.jpg"

export default {
  name: "Slider",
  data() {
    return {
      images: [
        img1,
        img2,
        img3,
        img4
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>


<template>
  <q-page padding>
    <h4 class="text-primary">Carousel Component</h4>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders"
      style="max-width: 500px"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">Slide 1: Quasar Framework</div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">Slide 2: Vue 3 Components</div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const slide = ref("style");
</script>

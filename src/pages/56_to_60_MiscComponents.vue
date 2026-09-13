<template>
  <q-page padding>
    <h4 class="text-primary text-center">Misc Components (56 to 60)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৫৬. Icon -->
      <div>
        <h5 class="text-secondary q-mb-sm">56. Icon</h5>
        <div class="q-gutter-md">
          <q-icon name="font_download" class="text-primary" size="32px" />
          <q-icon name="warning" class="text-warning" size="2rem" />
          <q-icon name="format_size" style="color: #ccc; font-size: 1.4em;" />
          <q-icon name="print" color="teal" size="4.4em" />
        </div>
      </div>
      <q-separator />

      <!-- ৫৭. Img (Image) -->
      <div>
        <h5 class="text-secondary q-mb-sm">57. Image (q-img)</h5>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 100%; max-width: 400px; height: 200px"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Beautiful Landscape
          </div>
        </q-img>
      </div>
      <q-separator />

      <!-- ৫৮. Infinite Scroll (Simulated for example) -->
      <div>
        <h5 class="text-secondary q-mb-sm">58. Infinite Scroll</h5>
        <div style="height: 150px; overflow: auto;" class="bg-grey-2 shadow-2 rounded-borders">
          <q-infinite-scroll @load="onLoad" :offset="250">
            <div v-for="(item, index) in items" :key="index" class="q-pa-sm">
              Lorem ipsum dolor sit amet - Item {{ index + 1 }}
            </div>
            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-infinite-scroll>
        </div>
      </div>
      <q-separator />

      <!-- ৫৯. Inner Loading -->
      <div>
        <h5 class="text-secondary q-mb-sm">59. Inner Loading</h5>
        <q-card class="relative-position shadow-2" style="max-width: 300px; height: 150px;">
          <q-card-section>
            This card is loading some data. Wait for it...
          </q-card-section>
          
          <q-inner-loading :showing="visible" label="Please wait..." label-class="text-teal" label-style="font-size: 1.1em">
             <q-spinner-gears size="50px" color="teal" />
          </q-inner-loading>
          
          <div class="absolute-bottom q-pa-sm text-center">
             <q-btn color="primary" @click="visible = !visible" :label="visible ? 'Stop Loading' : 'Start Loading'" />
          </div>
        </q-card>
      </div>
      <q-separator />

      <!-- ৬০. List & List Items -->
      <div>
        <h5 class="text-secondary q-mb-sm">60. List & List Items</h5>
        <q-list bordered separator class="rounded-borders" style="max-width: 350px;">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="bluetooth" />
            </q-item-section>
            <q-item-section>Icon as avatar</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="teal" text-color="white" icon="bluetooth" />
            </q-item-section>
            <q-item-section>Avatar-type icon</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section>Image avatar</q-item-section>
          </q-item>
        </q-list>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Infinite Scroll Data
const items = ref(Array.from({ length: 15 })) // Initial 15 items

const onLoad = (index, done) => {
  setTimeout(() => {
    // Add 10 more items when scrolling down
    const moreItems = Array.from({ length: 10 })
    items.value.push(...moreItems)
    done()
  }, 1000)
}

// Inner Loading Data
const visible = ref(true)
</script>
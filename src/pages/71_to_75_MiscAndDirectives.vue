<template>
  <q-page padding>
    <h4 class="text-primary text-center">Misc & Directives (71 to 75)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৭১. Slide Transition -->
      <div>
        <h5 class="text-secondary q-mb-sm">71. Slide Transition</h5>
        <q-card class="shadow-1">
          <q-card-actions>
            <q-btn color="primary" label="Toggle Content" @click="slideVisible = !slideVisible" />
          </q-card-actions>
          <q-slide-transition>
            <div v-show="slideVisible">
              <q-card-section class="bg-grey-2">
                This content slides down and up smoothly using Quasar's slide transition component!
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
      <q-separator />

      <!-- ৭২. Virtual Scroll -->
      <div>
        <h5 class="text-secondary q-mb-sm">72. Virtual Scroll</h5>
        <p class="text-caption">Rendering a list of 10,000 items efficiently without lagging the browser!</p>
        <q-virtual-scroll
          :items="heavyList"
          separator
          style="height: 200px"
          class="bg-grey-2 rounded-borders shadow-1"
        >
          <template v-slot="{ item, index }">
            <q-item :key="index" dense>
              <q-item-section>
                <q-item-label>Item #{{ item }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-virtual-scroll>
      </div>
      <q-separator />

      <!-- ৭৩. Close Popup (Directive) -->
      <div>
        <h5 class="text-secondary q-mb-sm">73. Close Popup (v-close-popup)</h5>
        <q-btn color="primary" label="Open Menu">
          <q-menu>
            <q-list style="min-width: 150px">
              <q-item clickable v-close-popup>
                <q-item-section class="text-positive">Click me to Auto-Close</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section class="text-negative">I won't close the menu</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <q-separator />

      <!-- ৭৪. Intersection (Directive) -->
      <div>
        <h5 class="text-secondary q-mb-sm">74. Intersection (v-intersection)</h5>
        <div style="height: 150px; overflow-y: auto;" class="bg-grey-2 q-pa-sm shadow-1">
          <div style="height: 250px" class="flex flex-center text-grey-6">
            Scroll down slowly...
          </div>
          <!-- v-intersection calls a function when this div comes into view -->
          <div v-intersection="onIntersection" class="q-pa-md bg-accent text-white text-center rounded-borders">
            {{ isIntersecting ? 'I am in view!' : 'I am out of view!' }}
          </div>
        </div>
      </div>
      <q-separator />

      <!-- ৭৫. Material Ripples (Directive) -->
      <div>
        <h5 class="text-secondary q-mb-sm">75. Material Ripples (v-ripple)</h5>
        <div
          v-ripple
          class="relative-position container bg-teal text-white flex flex-center rounded-borders cursor-pointer shadow-2"
          style="height: 100px; width: 100%;"
        >
          Click me anywhere for a Ripple Effect!
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Slide Transition Data
const slideVisible = ref(false)

// Virtual Scroll Data (generating 10,000 items dynamically)
const heavyList = Array.from({ length: 10000 }, (_, i) => i + 1)

// Intersection Directive Data
const isIntersecting = ref(false)
function onIntersection (entry) {
  isIntersecting.value = entry.isIntersecting
}
</script>
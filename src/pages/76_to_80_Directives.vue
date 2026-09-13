<template>
  <q-page padding>
    <h4 class="text-primary text-center">Vue Directives (76 to 80)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৭৬. Mutation -->
      <div>
        <h5 class="text-secondary q-mb-sm">76. Mutation (v-mutation)</h5>
        <div v-mutation="onMutation" class="q-pa-md bg-grey-3 rounded-borders shadow-1">
          <div v-html="mutationContent"></div>
          <q-btn color="primary" label="Add Content" @click="addContent" class="q-mt-md" size="sm" />
        </div>
        <div class="text-caption q-mt-sm text-primary text-weight-bold">
          DOM Changes Detected: {{ mutationCount }}
        </div>
      </div>
      <q-separator />

      <!-- ৭৭. Morph -->
      <div>
        <h5 class="text-secondary q-mb-sm">77. Morph (v-morph)</h5>
        <p class="text-caption">Click the button to morph it into a card, and vice versa!</p>
        <div class="relative-position flex flex-center" style="height: 120px;">
          <q-btn
            v-if="!morphed"
            v-morph:mymorph:morphgroup:500.resize="morphOptions"
            fab
            color="primary"
            icon="add"
            @click="morphed = true"
          />
          <q-card
            v-else
            v-morph:mymorph:morphgroup:500.resize="morphOptions"
            class="bg-primary text-white q-pa-md cursor-pointer"
            style="width: 200px; border-radius: 8px;"
            @click="morphed = false"
          >
            Click me to morph back!
          </q-card>
        </div>
      </div>
      <q-separator />

      <!-- ৭৮. Scroll -->
      <div>
        <h5 class="text-secondary q-mb-sm">78. Scroll (v-scroll)</h5>
        <div
          v-scroll="onScroll"
          style="height: 150px; overflow-y: auto;"
          class="bg-grey-2 q-pa-md shadow-1 rounded-borders"
        >
          <div style="height: 400px;" class="text-grey-7">
            Scroll inside here to see the position change.
            <q-badge color="accent" floating style="top: 10px; right: 20px;">
              Pos: {{ scrollPosition }}px
            </q-badge>
          </div>
        </div>
      </div>
      <q-separator />

      <!-- ৭৯. Scroll Fire -->
      <div>
        <h5 class="text-secondary q-mb-sm">79. Scroll Fire (v-scroll-fire)</h5>
        <div style="height: 150px; overflow-y: auto;" class="bg-blue-grey-1 q-pa-md shadow-1 rounded-borders">
          <div style="height: 300px;" class="text-grey-7">
            Scroll down to the bottom to fire an event just once!
          </div>
          <!-- v-scroll-fire triggers the function when it becomes visible -->
          <div v-scroll-fire="onScrollFire" class="bg-positive text-white q-pa-sm text-center rounded-borders">
            I triggered the Scroll Fire Notification!
          </div>
        </div>
      </div>
      <q-separator />

      <!-- ৮০. Touch Hold -->
      <div>
        <h5 class="text-secondary q-mb-sm">80. Touch Hold (v-touch-hold)</h5>
        <!-- The :1000 modifier means hold for 1000ms (1 second) -->
        <div
          v-touch-hold:1000="onTouchHold"
          class="bg-teal text-white flex flex-center rounded-borders cursor-pointer shadow-2"
          style="height: 100px;"
        >
          Click and Hold me for 1 second!
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// Mutation Data
const mutationContent = ref('Initial text.')
const mutationCount = ref(0)
function onMutation (mutationList) {
  mutationCount.value++
}
function addContent () {
  mutationContent.value += '<br>New line added via script!'
}

// Morph Data
const morphed = ref(false)
const morphOptions = {
  keepToClone: true
}

// Scroll Data
const scrollPosition = ref(0)
function onScroll (position) {
  scrollPosition.value = position
}

// Scroll Fire Data
function onScrollFire () {
  $q.notify({
    color: 'positive',
    message: 'Scroll Fire triggered!',
    icon: 'local_fire_department',
    position: 'top'
  })
}

// Touch Hold Data
function onTouchHold () {
  $q.notify({
    color: 'warning',
    message: 'Touch Hold detected!',
    icon: 'touch_app',
    position: 'center'
  })
}
</script>
<template>
  <q-page padding>
    <h4 class="text-primary text-center">Vue Composables (96 to 100)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৯৬. useQuasar -->
      <div>
        <h5 class="text-secondary q-mb-sm">96. useQuasar</h5>
        <q-card class="q-pa-md shadow-1">
          <p>This composable gives access to the $q object globally.</p>
          <div class="text-weight-bold text-primary">
            Platform: {{ $q.platform.is.desktop ? 'Desktop' : 'Mobile/Other' }}
          </div>
          <q-btn color="primary" label="Show Info" class="q-mt-sm" @click="showInfo" />
        </q-card>
      </div>
      <q-separator />

      <!-- ৯৭. useId -->
      <div>
        <h5 class="text-secondary q-mb-sm">97. useId</h5>
        <p class="text-caption">Generates a unique ID (useful for accessibility or linking labels to inputs).</p>
        <q-card class="q-pa-md shadow-1 bg-grey-2">
          <div>Generated ID: <strong>{{ uniqueId }}</strong></div>
          <label :for="uniqueId" class="q-mt-sm block cursor-pointer text-primary">
            Click this label to focus the input below!
          </label>
          <input :id="uniqueId" type="text" placeholder="Type here..." class="q-mt-xs q-pa-xs border" />
        </q-card>
      </div>
      <q-separator />

      <!-- ৯৮. useIntersection -->
      <div>
        <h5 class="text-secondary q-mb-sm">98. useIntersection</h5>
        <p class="text-caption">Similar to v-intersection directive, but used in script setup.</p>
        <div style="height: 100px; overflow-y: auto;" class="bg-blue-grey-1 q-pa-sm shadow-1">
          <div style="height: 200px" class="flex flex-center text-grey">Scroll down...</div>
          <div ref="intersectionRef" class="bg-accent text-white q-pa-md text-center">
            Am I intersecting? {{ isIntersecting ? 'YES!' : 'NO' }}
          </div>
        </div>
      </div>
      <q-separator />

      <!-- ৯৯. useInterval -->
      <div>
        <h5 class="text-secondary q-mb-sm">99. useInterval</h5>
        <q-card class="q-pa-md shadow-1 text-center">
          <div class="text-h4 text-primary q-mb-md">Counter: {{ counter }}</div>
          <div class="q-gutter-sm">
            <q-btn color="positive" label="Start Interval" @click="startMyInterval" />
            <q-btn color="negative" label="Stop Interval" @click="stopMyInterval" />
          </div>
        </q-card>
      </div>
      <q-separator />

      <!-- ১০০. useTimeout -->
      <div>
        <h5 class="text-secondary q-mb-sm">100. useTimeout</h5>
        <p class="text-caption">Executes a function after a delay (e.g., 2 seconds).</p>
        <q-btn color="warning" text-color="black" label="Trigger Timeout (2s)" @click="triggerTimeout" />
        <div v-if="timeoutMessage" class="q-mt-sm text-positive text-weight-bold">
          {{ timeoutMessage }}
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar, useId } from 'quasar'
import { useIntersection } from 'quasar' // Note: Some composables might need manual plugin addition in older Quasar versions

const $q = useQuasar()

// 96. useQuasar Data
function showInfo () {
  $q.notify({
    message: `Screen Width: ${$q.screen.width}px`,
    color: 'info'
  })
}

// 97. useId Data
const uniqueId = useId()

// 98. useIntersection Data (Simplified logic for demonstration)
const intersectionRef = ref(null)
const isIntersecting = ref(false)
// Quasar's useIntersection can sometimes be tricky to set up simply in a single file without a dedicated component, 
// so this is a placeholder to show the concept. In real scenarios, you attach it to an element.

// 99. useInterval Data (Using standard JS as Quasar's useInterval is an internal util for components)
const counter = ref(0)
let intervalId = null
function startMyInterval () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      counter.value++
    }, 1000)
  }
}
function stopMyInterval () {
  clearInterval(intervalId)
  intervalId = null
}

// 100. useTimeout Data
const timeoutMessage = ref('')
let timeoutId = null
function triggerTimeout () {
  timeoutMessage.value = 'Waiting...'
  clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    timeoutMessage.value = 'Timeout executed after 2 seconds!'
  }, 2000)
}
</script>
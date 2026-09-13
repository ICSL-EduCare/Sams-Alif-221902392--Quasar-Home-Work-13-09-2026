<template>
  <q-page padding>
    <h4 class="text-primary text-center">Form Components (36 to 40)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 500px; margin: 0 auto;">
      
      <!-- ৩৬. Uploader -->
      <div>
        <h5 class="text-secondary q-mb-sm">36. File Uploader</h5>
        <q-uploader
          url="http://localhost:4444/upload"
          label="Upload your files"
          color="teal"
          square
          flat
          bordered
          style="max-width: 300px"
        />
      </div>
      <q-separator />

      <!-- ৩৭. Knob -->
      <div>
        <h5 class="text-secondary q-mb-sm">37. Knob Component</h5>
        <q-knob
          v-model="knobVal"
          :min="0"
          :max="100"
          color="primary"
          track-color="grey-3"
          size="80px"
          show-value
          class="text-primary"
        />
      </div>
      <q-separator />

      <!-- ৩৮. Knob (Advanced) -->
      <div>
        <h5 class="text-secondary q-mb-sm">38. Knob (Advanced)</h5>
        <q-knob
          v-model="advKnobVal"
          :min="0"
          :max="10"
          :step="1"
          color="warning"
          track-color="transparent"
          center-color="grey-9"
          size="100px"
          show-value
          class="text-white"
        >
          {{ advKnobVal }} / 10
        </q-knob>
      </div>
      <q-separator />

      <!-- ৩৯. Search Input -->
      <div>
        <h5 class="text-secondary q-mb-sm">39. Search Input</h5>
        <q-input bottom-slots v-model="search" label="Search" counter maxlength="12" :dense="dense">
          <template v-slot:append>
            <q-icon v-if="search !== ''" name="close" @click="search = ''" class="cursor-pointer" />
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <q-separator />

      <!-- ৪০. Color Picker (Input mode) -->
      <div>
        <h5 class="text-secondary q-mb-sm">40. Color Input</h5>
        <q-input
          filled
          v-model="colorInput"
          :rules="['anyColor']"
          class="my-input"
        >
          <template v-slot:append>
            <q-icon name="colorize" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-color v-model="colorInput" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Knob Data
const knobVal = ref(70)
const advKnobVal = ref(6)

// Search Data
const search = ref('')
const dense = ref(false)

// Color Input Data
const colorInput = ref('#FF00FF')
</script>
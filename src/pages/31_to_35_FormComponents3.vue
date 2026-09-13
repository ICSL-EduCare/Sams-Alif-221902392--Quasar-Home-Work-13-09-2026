<template>
  <q-page padding>
    <h4 class="text-primary text-center">Form Components (31 to 35)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 500px; margin: 0 auto;">
      
      <!-- ৩১. Slider -->
      <div>
        <h5 class="text-secondary q-mb-sm">31. Slider</h5>
        <q-slider v-model="sliderVal" :min="0" :max="100" color="primary" />
        <div class="text-caption">Value: {{ sliderVal }}</div>
      </div>
      <q-separator />

      <!-- ৩২. Range -->
      <div>
        <h5 class="text-secondary q-mb-sm">32. Range</h5>
        <q-range
          v-model="rangeVal"
          :min="0"
          :max="100"
          color="accent"
          label-always
        />
      </div>
      <q-separator />

      <!-- ৩৩. Date Picker -->
      <div>
        <h5 class="text-secondary q-mb-sm">33. Date Picker</h5>
        <q-input filled v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <q-separator />

      <!-- ৩৪. Time Picker -->
      <div>
        <h5 class="text-secondary q-mb-sm">34. Time Picker</h5>
        <q-input filled v-model="time" mask="time" :rules="['time']">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="time">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <q-separator />

      <!-- ৩৫. Rating -->
      <div>
        <h5 class="text-secondary q-mb-sm">35. Rating</h5>
        <q-rating
          v-model="ratingVal"
          size="2em"
          :max="5"
          color="warning"
          icon="star_border"
          icon-selected="star"
          icon-half="star_half"
        />
        <div class="text-caption q-mt-sm">Your Rating: {{ ratingVal }} / 5</div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Slider Data
const sliderVal = ref(50)

// Range Data
const rangeVal = ref({ min: 20, max: 65 })

// Date Picker Data
const date = ref('2026/09/13')

// Time Picker Data
const time = ref('10:56')

// Rating Data
const ratingVal = ref(3.5)
</script>
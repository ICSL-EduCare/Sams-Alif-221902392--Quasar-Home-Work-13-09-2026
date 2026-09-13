<template>
  <q-page padding>
    <h4 class="text-primary text-center">Quasar Utils (101 to 105)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ১০১. Date Utils -->
      <div>
        <h5 class="text-secondary q-mb-sm">101. Date Utils</h5>
        <q-card class="q-pa-md shadow-1">
          <div class="text-subtitle1">Current Date & Time:</div>
          <div class="text-h6 text-primary">{{ formattedDate }}</div>
          <div class="q-mt-sm text-caption">Added 5 days: <span class="text-weight-bold">{{ futureDate }}</span></div>
        </q-card>
      </div>
      <q-separator />

      <!-- ১০২. Color Utils -->
      <div>
        <h5 class="text-secondary q-mb-sm">102. Color Utils</h5>
        <q-card class="q-pa-md shadow-1">
          <div class="row items-center q-gutter-md">
            <div :style="{ backgroundColor: myColor, width: '50px', height: '50px', borderRadius: '50%' }"></div>
            <div>
              <div>Original HEX: <strong>{{ myColor }}</strong></div>
              <div>Converted to RGB: <strong>{{ rgbColor }}</strong></div>
              <div>Lightened Color: <strong :style="{ color: lightColor }">{{ lightColor }}</strong></div>
            </div>
          </div>
        </q-card>
      </div>
      <q-separator />

      <!-- ১০৩. Formatter Utils -->
      <div>
        <h5 class="text-secondary q-mb-sm">103. Formatter Utils</h5>
        <q-card class="q-pa-md shadow-1 bg-grey-2">
          <p>File Size Formatting:</p>
          <div class="text-h6 text-accent">{{ fileSizeFormatted }}</div>
          <p class="text-caption q-mt-sm">(Converted 15485764 bytes to human-readable size)</p>
        </q-card>
      </div>
      <q-separator />

      <!-- ১০৪. Type Checking Utils -->
      <div>
        <h5 class="text-secondary q-mb-sm">104. Type Checking Utils</h5>
        <q-card class="q-pa-md shadow-1">
          <p>Checking if a variable is a Date object or an Array:</p>
          <ul class="q-pl-md">
            <li>Is `myVar` a Date? <q-badge :color="isDateValid ? 'positive' : 'negative'">{{ isDateValid }}</q-badge></li>
            <li>Is `myArray` an Array? <q-badge :color="isArrayValid ? 'positive' : 'negative'">{{ isArrayValid }}</q-badge></li>
          </ul>
        </q-card>
      </div>
      <q-separator />

      <!-- ১০৫. Other Utils (UID) -->
      <div>
        <h5 class="text-secondary q-mb-sm">105. Other Utils (Generate UID)</h5>
        <div class="q-gutter-sm">
          <q-btn color="primary" label="Generate Unique ID" @click="generateId" />
          <div class="q-mt-sm text-h6 text-teal">{{ generatedUid }}</div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { date, colors, format, is, uid } from 'quasar'

// 101. Date Utils
const timeStamp = Date.now()
const formattedDate = date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
const newDate = date.addToDate(timeStamp, { days: 5 })
const futureDate = date.formatDate(newDate, 'MMMM D, YYYY')

// 102. Color Utils
const myColor = '#34a853'
const rgbColor = colors.hexToRgb(myColor) // Returns object or string depending on util usage, let's use string formatting
const rgbString = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
const lightColor = colors.lighten(myColor, 30) // Lighten by 30%

// 103. Formatter Utils
const fileSizeFormatted = format.humanStorageSize(15485764)

// 104. Type Checking Utils
const myVar = new Date()
const myArray = [1, 2, 3]
const isDateValid = is.date(myVar)
const isArrayValid = Array.isArray(myArray) // Quasar uses standard JS mostly for arrays now, but is.object etc exist

// 105. Other Utils (UID)
const generatedUid = ref('Click button to generate')
function generateId () {
  generatedUid.value = uid()
}
</script>
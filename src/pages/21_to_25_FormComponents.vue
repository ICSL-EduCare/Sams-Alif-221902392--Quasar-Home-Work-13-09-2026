<template>
  <q-page padding>
    <h4 class="text-primary text-center">Form Components (21 to 25)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 500px; margin: 0 auto;">
      
      <!-- ২১. Input Textfield -->
      <div>
        <h5 class="text-secondary q-mb-sm">21. Input Textfield</h5>
        <q-input outlined v-model="text" label="Enter your name" />
        <q-input filled v-model="password" type="password" label="Password" class="q-mt-sm" />
      </div>
      <q-separator />

      <!-- ২২. Select -->
      <div>
        <h5 class="text-secondary q-mb-sm">22. Select (Dropdown)</h5>
        <q-select outlined v-model="model" :options="options" label="Select a Framework" />
      </div>
      <q-separator />

      <!-- ২৩. File Picker -->
      <div>
        <h5 class="text-secondary q-mb-sm">23. File Picker</h5>
        <q-file outlined v-model="file" label="Upload your resume">
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </div>
      <q-separator />

      <!-- ২৪. Form & ২৫. Field (wrapper) -->
      <!-- We combine these two as they naturally go together -->
      <div>
        <h5 class="text-secondary q-mb-sm">24 & 25. Form with Field Wrapper</h5>
        
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          
          <!-- Field Wrapper used to group elements -->
          <q-field outlined label="User Agreement" stack-label>
            <template v-slot:control>
              <div class="self-center full-width no-outline" tabindex="0">
                I agree to the terms and conditions of the Quasar framework homework.
              </div>
            </template>
          </q-field>

          <q-input
            filled
            v-model="age"
            label="Your age *"
            hint="You must be at least 18"
            type="number"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your age',
              val => val > 17 && val < 100 || 'Please type a real age'
            ]"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

// Input Data
const text = ref('')
const password = ref('')

// Select Data
const model = ref(null)
const options = ['Quasar', 'Vue.js', 'React', 'Angular']

// File Picker Data
const file = ref(null)

// Form & Field Data
const $q = useQuasar()
const age = ref(null)

function onSubmit () {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Form Submitted successfully!'
  })
}

function onReset () {
  age.value = null
  text.value = ''
  password.value = ''
  model.value = null
  file.value = null
}
</script>
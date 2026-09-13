<template>
  <q-page padding>
    <h4 class="text-primary text-center">Form Components (26 to 30)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 500px; margin: 0 auto;">
      
      <!-- ২৬. Radio -->
      <div>
        <h5 class="text-secondary q-mb-sm">26. Radio</h5>
        <div class="q-gutter-sm">
          <q-radio v-model="radioVal" val="teal" label="Teal" color="teal" />
          <q-radio v-model="radioVal" val="orange" label="Orange" color="orange" />
          <q-radio v-model="radioVal" val="red" label="Red" color="red" />
        </div>
      </div>
      <q-separator />

      <!-- ২৭. Checkbox -->
      <div>
        <h5 class="text-secondary q-mb-sm">27. Checkbox</h5>
        <div class="q-gutter-sm">
          <q-checkbox v-model="check1" label="Agree to Terms" color="teal" />
          <q-checkbox v-model="check2" label="Subscribe to Newsletter" color="orange" />
        </div>
      </div>
      <q-separator />

      <!-- ২৮. Toggle -->
      <div>
        <h5 class="text-secondary q-mb-sm">28. Toggle</h5>
        <q-toggle v-model="toggleVal" color="green" label="Enable Notifications" />
      </div>
      <q-separator />

      <!-- ২৯. Button Toggle -->
      <div>
        <h5 class="text-secondary q-mb-sm">29. Button Toggle</h5>
        <q-btn-toggle
          v-model="btnToggleVal"
          toggle-color="primary"
          :options="[
            {label: 'One', value: 'one'},
            {label: 'Two', value: 'two'},
            {label: 'Three', value: 'three'}
          ]"
        />
      </div>
      <q-separator />

      <!-- ৩০. Option Group -->
      <div>
        <h5 class="text-secondary q-mb-sm">30. Option Group</h5>
        <q-option-group
          v-model="groupVal"
          :options="groupOptions"
          color="primary"
          inline
        />
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Radio Data
const radioVal = ref('teal')

// Checkbox Data
const check1 = ref(true)
const check2 = ref(false)

// Toggle Data
const toggleVal = ref(false)

// Button Toggle Data
const btnToggleVal = ref('one')

// Option Group Data
const groupVal = ref('op1')
const groupOptions = [
  { label: 'Option 1', value: 'op1' },
  { label: 'Option 2', value: 'op2' },
  { label: 'Option 3', value: 'op3' }
]
</script>
<template>
  <q-page padding>
    <h4 class="text-primary text-center">Quasar Plugins (86 to 90)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৮৬. App Visibility -->
      <div>
        <h5 class="text-secondary q-mb-sm">86. App Visibility</h5>
        <q-card class="q-pa-md shadow-1 text-center">
          <div>আপনার ব্রাউজার ট্যাবটি কি এখন অ্যাকটিভ আছে?</div>
          <q-badge :color="$q.appVisible ? 'positive' : 'negative'" class="q-mt-sm text-h6">
            {{ $q.appVisible ? 'YES (Visible)' : 'NO (Hidden)' }}
          </q-badge>
          <div class="text-caption q-mt-sm text-grey-7">
            (ট্যাব চেঞ্জ করলে বা মিনিমাইজ করলে এটি False হয়ে যায়, যা ব্যাকগ্রাউন্ড প্রসেস থামাতে সাহায্য করে)
          </div>
        </q-card>
      </div>
      <q-separator />

      <!-- ৮৭. Bottom Sheet -->
      <div>
        <h5 class="text-secondary q-mb-sm">87. Bottom Sheet</h5>
        <q-btn color="primary" label="Show Bottom Sheet" @click="showBottomSheet" />
      </div>
      <q-separator />

      <!-- ৮৮. Cookies -->
      <div>
        <h5 class="text-secondary q-mb-sm">88. Cookies</h5>
        <div class="q-gutter-sm">
          <q-btn color="secondary" label="Set Cookie" @click="setCookie" />
          <q-btn color="accent" label="Check Cookie" @click="getCookie" />
        </div>
        <div class="q-mt-sm text-subtitle1">
          Cookie Status: <span class="text-primary text-weight-bold">{{ cookieStatus }}</span>
        </div>
      </div>
      <q-separator />

      <!-- ৮৯. Dark Mode -->
      <div>
        <h5 class="text-secondary q-mb-sm">89. Dark Mode</h5>
        <q-card 
          class="q-pa-md shadow-1 text-center" 
          :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-white text-black'"
        >
          <p class="text-h6">Current Mode: {{ $q.dark.isActive ? 'Dark 🌙' : 'Light ☀️' }}</p>
          <q-btn
            :color="$q.dark.isActive ? 'white' : 'black'"
            :text-color="$q.dark.isActive ? 'black' : 'white'"
            label="Toggle Dark Mode"
            @click="$q.dark.toggle()"
          />
        </q-card>
      </div>
      <q-separator />

      <!-- ৯০. Dialog (Programmatic Plugin) -->
      <div>
        <h5 class="text-secondary q-mb-sm">90. Dialog (Plugin API)</h5>
        <p class="text-caption">HTML ট্যাগ ছাড়াই সরাসরি স্ক্রিপ্ট থেকে ডায়ালগ ওপেন করা।</p>
        <q-btn color="warning" text-color="black" label="Show Confirm Dialog" @click="showConfirmDialog" />
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// 87. Bottom Sheet Data
function showBottomSheet () {
  try {
    $q.bottomSheet({
      message: 'Select an Action',
      actions: [
        { label: 'Share', icon: 'share', id: 'share' },
        { label: 'Upload', icon: 'cloud_upload', id: 'upload' },
        { label: 'Delete', icon: 'delete', color: 'negative', id: 'delete' }
      ]
    }).onOk(action => {
      $q.notify({ message: `Clicked on ${action.label}`, color: 'positive' })
    })
  } catch (e) {
    $q.notify({ message: 'BottomSheet Plugin is not enabled in quasar.config.js', color: 'negative' })
  }
}

// 88. Cookies Data
const cookieStatus = ref('Not Checked')
function setCookie () {
  try {
    $q.cookies.set('my_quasar_cookie', 'Quasar Rocks!', { expires: '1d' })
    cookieStatus.value = 'Cookie Set Successfully!'
  } catch (e) {
    cookieStatus.value = 'Error: Plugin missing'
  }
}
function getCookie () {
  try {
    const val = $q.cookies.get('my_quasar_cookie')
    cookieStatus.value = val ? `Found: ${val}` : 'No Cookie Found'
  } catch (e) {
    cookieStatus.value = 'Error: Plugin missing'
  }
}

// 90. Dialog Plugin Data
function showConfirmDialog () {
  try {
    $q.dialog({
      title: 'Confirm',
      message: 'Are you sure you want to proceed?',
      cancel: true,
      persistent: true
    }).onOk(() => {
      $q.notify({ message: 'You clicked OK', color: 'positive' })
    }).onCancel(() => {
      $q.notify({ message: 'You clicked Cancel', color: 'negative' })
    })
  } catch (e) {
    $q.notify({ message: 'Dialog Plugin is not enabled in quasar.config.js', color: 'negative' })
  }
}
</script>
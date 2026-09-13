<template>
  <q-page padding>
    <h4 class="text-primary text-center">Quasar Plugins (91 to 95)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৯১. Loading -->
      <div>
        <h5 class="text-secondary q-mb-sm">91. Loading</h5>
        <p class="text-caption">পুরো স্ক্রিন জুড়ে একটি লোডিং স্পিনার দেখাবে (২ সেকেন্ডের জন্য)।</p>
        <q-btn color="primary" label="Show Loading" @click="showLoading" />
      </div>
      <q-separator />

      <!-- ৯২. Loading Bar -->
      <div>
        <h5 class="text-secondary q-mb-sm">92. Loading Bar</h5>
        <p class="text-caption">পেজের একেবারে উপরে একটি চিকন লোডিং বার চলবে।</p>
        <div class="q-gutter-sm">
          <q-btn color="secondary" label="Start Loading Bar" @click="startLoadingBar" />
          <q-btn color="negative" label="Stop Loading Bar" @click="stopLoadingBar" />
        </div>
      </div>
      <q-separator />

      <!-- ৯৩. Local/Session Storage -->
      <div>
        <h5 class="text-secondary q-mb-sm">93. Local/Session Storage</h5>
        <p class="text-caption">ব্রাউজারের লোকাল স্টোরেজে ডাটা সেভ করা।</p>
        <div class="q-gutter-sm">
          <q-btn color="accent" label="Save Data" @click="saveToStorage" />
          <q-btn color="info" label="Load Data" @click="loadFromStorage" />
        </div>
        <div class="q-mt-sm text-subtitle1">
          Storage Value: <span class="text-primary text-weight-bold">{{ storageValue }}</span>
        </div>
      </div>
      <q-separator />

      <!-- ৯৪. Meta -->
      <div>
        <h5 class="text-secondary q-mb-sm">94. Meta Plugin</h5>
        <q-card class="q-pa-md bg-grey-2 shadow-1">
          <p>Meta প্লাগিন ব্যবহার করে এই পেজের টাইটেল পরিবর্তন করা হয়েছে। আপনার ব্রাউজারের ট্যাবের দিকে লক্ষ্য করুন!</p>
          <p class="text-caption">Current Tab Title: <strong>{{ title }}</strong></p>
        </q-card>
      </div>
      <q-separator />

      <!-- ৯৫. Notify -->
      <div>
        <h5 class="text-secondary q-mb-sm">95. Notify</h5>
        <p class="text-caption">স্ক্রিনে পপ-আপ মেসেজ দেখানো (যা আমরা আগে অনেকবার ব্যবহার করেছি)।</p>
        <q-btn color="warning" text-color="black" label="Show Notification" @click="showNotification" />
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar, useMeta } from 'quasar'

const $q = useQuasar()

// 91. Loading
function showLoading () {
  try {
    $q.loading.show({
      message: 'Processing your request...'
    })
    // 2 সেকেন্ড পর লোডিং বন্ধ হবে
    setTimeout(() => {
      $q.loading.hide()
    }, 2000)
  } catch (e) {
    $q.notify({ message: 'Loading plugin not enabled', color: 'negative' })
  }
}

// 92. Loading Bar
function startLoadingBar () {
  try {
    $q.loadingBar.start()
  } catch (e) {
    $q.notify({ message: 'LoadingBar plugin not enabled', color: 'negative' })
  }
}
function stopLoadingBar () {
  try {
    $q.loadingBar.stop()
  } catch (e) {}
}

// 93. Local/Session Storage
const storageValue = ref('No Data')
function saveToStorage () {
  try {
    $q.localStorage.set('quasar_test_key', 'Hello from Quasar Storage!')
    $q.notify({ message: 'Data saved to LocalStorage', color: 'positive' })
  } catch (e) {
    $q.notify({ message: 'LocalStorage plugin not enabled', color: 'negative' })
  }
}
function loadFromStorage () {
  try {
    const val = $q.localStorage.getItem('quasar_test_key')
    storageValue.value = val ? val : 'No Data Found'
  } catch (e) {
    storageValue.value = 'Plugin Error'
  }
}

// 94. Meta
const title = ref('Quasar Awesome Plugins')
useMeta(() => {
  return {
    title: title.value
  }
})

// 95. Notify
function showNotification () {
  try {
    $q.notify({
      message: 'This is a beautiful Quasar Notification!',
      color: 'purple',
      icon: 'announcement',
      position: 'top-right'
    })
  } catch (e) {
    alert('Notify plugin not enabled')
  }
}
</script>
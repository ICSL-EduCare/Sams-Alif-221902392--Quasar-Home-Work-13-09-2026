<template>
  <q-page padding>
    <h4 class="text-primary text-center">Directives & Plugins (81 to 85)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৮১. Touch Pan -->
      <div>
        <h5 class="text-secondary q-mb-sm">81. Touch Pan (v-touch-pan)</h5>
        <p class="text-caption">মাউস চেপে ধরে বক্সটিকে এদিক-ওদিক টেনে (Drag) দেখুন!</p>
        <div
          v-touch-pan.prevent.mouse="handlePan"
          class="bg-grey-3 q-pa-md rounded-borders shadow-1 cursor-pointer overflow-hidden relative-position"
          style="height: 150px;"
        >
          <div
            class="bg-primary rounded-borders absolute flex flex-center text-white"
            :style="{ top: panY + 'px', left: panX + 'px', width: '60px', height: '60px' }"
          >
            Drag
          </div>
        </div>
      </div>
      <q-separator />

      <!-- ৮২. Touch Repeat -->
      <div>
        <h5 class="text-secondary q-mb-sm">82. Touch Repeat (v-touch-repeat)</h5>
        <div class="flex flex-center q-gutter-md">
          <q-btn
            v-touch-repeat:300.mouse="handleRepeat"
            color="secondary"
            label="Press & Hold Me"
          />
          <q-badge color="accent" text-color="white" class="text-h6">
            Count: {{ repeatCount }}
          </q-badge>
        </div>
      </div>
      <q-separator />

      <!-- ৮৩. Touch Swipe -->
      <div>
        <h5 class="text-secondary q-mb-sm">83. Touch Swipe (v-touch-swipe)</h5>
        <div
          v-touch-swipe.mouse="handleSwipe"
          class="bg-info text-white flex flex-center rounded-borders shadow-2 cursor-pointer"
          style="height: 100px;"
        >
          Swipe me left, right, up, or down! (Mouse drag)
        </div>
        <div class="text-center q-mt-sm text-subtitle1">
          Last Swipe Direction: <span class="text-weight-bold text-primary">{{ lastSwipe }}</span>
        </div>
      </div>
      <q-separator />

      <!-- ৮৪. Addressbar Color (Plugin) -->
      <div>
        <h5 class="text-secondary q-mb-sm">84. Addressbar Color (Plugin)</h5>
        <p class="text-caption">এটি মোবাইলের ব্রাউজারের উপরের অ্যাড্রেস বারের কালার চেঞ্জ করে (ডেস্কটপে বোঝা যাবে না)।</p>
        <q-btn color="primary" label="Set Red" @click="changeAddressbarColor('#ff0000')" />
        <q-btn color="positive" label="Set Green" @click="changeAddressbarColor('#00ff00')" class="q-ml-sm" />
      </div>
      <q-separator />

      <!-- ৮৫. App Fullscreen (Plugin) -->
      <div>
        <h5 class="text-secondary q-mb-sm">85. App Fullscreen (Plugin)</h5>
        <q-card class="bg-grey-2 shadow-1 text-center q-pa-md">
          <p>পুরো ওয়েবসাইটকে ফুলস্ক্রিন করুন।</p>
          <q-btn
            :icon="$q.fullscreen?.isActive ? 'fullscreen_exit' : 'fullscreen'"
            :label="$q.fullscreen?.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
            color="accent"
            @click="toggleFullscreen"
          />
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

// Touch Pan Data
const panX = ref(50)
const panY = ref(50)
function handlePan (details) {
  panX.value += details.delta.x
  panY.value += details.delta.y
}

// Touch Repeat Data
const repeatCount = ref(0)
function handleRepeat () {
  repeatCount.value++
}

// Touch Swipe Data
const lastSwipe = ref('None')
function handleSwipe (details) {
  lastSwipe.value = details.direction
}

// Addressbar Color Plugin
function changeAddressbarColor (color) {
  try {
    $q.addressbarColor.set(color)
    $q.notify({ message: `Color set to ${color}`, color: 'positive' })
  } catch (e) {
    $q.notify({ message: 'Plugin not active in quasar.config.js', color: 'negative' })
  }
}

// App Fullscreen Plugin
function toggleFullscreen () {
  try {
    $q.fullscreen.toggle()
  } catch (e) {
    $q.notify({ message: 'Fullscreen Plugin not active in quasar.config.js', color: 'negative' })
  }
}
</script>
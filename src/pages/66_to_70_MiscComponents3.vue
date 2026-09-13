<template>
  <q-page padding>
    <h4 class="text-primary text-center">Misc Components (66 to 70)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৬৬. Popup Proxy (Responsive Popup) -->
      <div>
        <h5 class="text-secondary q-mb-sm">66. Popup Proxy</h5>
        <q-btn color="primary" label="Show Popup Proxy">
          <!-- on desktop it shows a menu, on mobile a dialog -->
          <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
            <q-banner class="bg-primary text-white">
              <template v-slot:avatar>
                <q-icon name="info" />
              </template>
              This is a responsive popup! It changes style based on screen size.
            </q-banner>
          </q-popup-proxy>
        </q-btn>
      </div>
      <q-separator />

      <!-- ৬৭. Pull to Refresh -->
      <div>
        <h5 class="text-secondary q-mb-sm">67. Pull to Refresh</h5>
        <q-card class="bg-grey-2 shadow-1" style="height: 150px; overflow: hidden;">
          <!-- Pull down inside the box to trigger refresh -->
          <q-pull-to-refresh @refresh="refreshPage">
            <div class="q-pa-md text-center" style="height: 200px;">
              <p>Pull this area down to refresh!</p>
              <q-icon name="arrow_downward" size="40px" color="grey-6" />
            </div>
          </q-pull-to-refresh>
        </q-card>
      </div>
      <q-separator />

      <!-- ৬৮. Responsive -->
      <div>
        <h5 class="text-secondary q-mb-sm">68. Responsive Component</h5>
        <q-card class="q-pa-md shadow-1 text-center">
          <p>Resize your browser window to see the effect.</p>
          <!-- Using Quasar's responsive component to maintain aspect ratio -->
          <q-responsive :ratio="16/9" class="bg-teal text-white flex flex-center rounded-borders">
            <div>16:9 Aspect Ratio Maintained</div>
          </q-responsive>
        </q-card>
      </div>
      <q-separator />

      <!-- ৬৯. Separator -->
      <div>
        <h5 class="text-secondary q-mb-sm">69. Separator</h5>
        <q-card class="shadow-1">
          <div class="q-pa-md">Top Content</div>
          <!-- Horizontal Separator -->
          <q-separator color="primary" inset />
          <div class="q-pa-md">Middle Content</div>
          <!-- Thick Separator -->
          <q-separator size="5px" color="accent" />
          <div class="q-pa-md">Bottom Content</div>
        </q-card>
      </div>
      <q-separator />

      <!-- ৭০. Slide Item (Swipeable list item) -->
      <div>
        <h5 class="text-secondary q-mb-sm">70. Slide Item</h5>
        <q-list bordered class="rounded-borders">
          <q-slide-item @left="onLeft" @right="onRight">
            <template v-slot:left>
              <q-icon name="done" />
            </template>
            <template v-slot:right>
              <q-icon name="delete" />
            </template>

            <q-item>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white" icon="mail" />
              </q-item-section>
              <q-item-section>Swipe me left or right!</q-item-section>
            </q-item>
          </q-slide-item>
        </q-list>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

// Pull to Refresh Data
const refreshPage = (done) => {
  setTimeout(() => {
    $q.notify({
      color: 'positive',
      message: 'Refreshed successfully!',
      icon: 'check_circle'
    })
    done()
  }, 1000)
}

// Slide Item Data
const onLeft = ({ reset }) => {
  $q.notify('Left action triggered!')
  finalize(reset)
}

const onRight = ({ reset }) => {
  $q.notify('Right action triggered! (Delete)')
  finalize(reset)
}

const finalize = (reset) => {
  setTimeout(() => {
    reset()
  }, 500)
}
</script>
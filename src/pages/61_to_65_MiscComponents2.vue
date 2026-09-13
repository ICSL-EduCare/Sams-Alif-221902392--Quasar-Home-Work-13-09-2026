<template>
  <q-page padding>
    <h4 class="text-primary text-center">Misc Components (61 to 65)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৬১. Markup Table -->
      <div>
        <h5 class="text-secondary q-mb-sm">61. Markup Table</h5>
        <q-markup-table class="shadow-2">
          <thead>
            <tr>
              <th class="text-left">Dessert (100g serving)</th>
              <th class="text-right">Calories</th>
              <th class="text-right">Fat (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">Frozen Yogurt</td>
              <td class="text-right">159</td>
              <td class="text-right">6</td>
            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>
              <td class="text-right">237</td>
              <td class="text-right">9</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
      <q-separator />

      <!-- ৬২. Menu -->
      <div>
        <h5 class="text-secondary q-mb-sm">62. Menu</h5>
        <q-btn color="primary" label="Click me for a Menu">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New incognito window</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <q-separator />

      <!-- ৬৩. No SSR (Server-Side Rendering) -->
      <div>
        <h5 class="text-secondary q-mb-sm">63. No SSR</h5>
        <q-card class="q-pa-md bg-grey-2 shadow-1">
          <p class="text-caption">
            The component inside <code>&lt;q-no-ssr&gt;</code> will only render on the client side (browser), not on the server.
          </p>
          <q-no-ssr>
            <div class="text-positive text-weight-bold">
              This text is strictly rendered only on the client!
            </div>
            <!-- Fallback content if SSR is happening -->
            <template v-slot:placeholder>
              <div class="text-negative">Loading on server...</div>
            </template>
          </q-no-ssr>
        </q-card>
      </div>
      <q-separator />

      <!-- ৬৪. Observers (Intersection Observer Example) -->
      <div>
        <h5 class="text-secondary q-mb-sm">64. Observers (Intersection)</h5>
        <q-card class="q-pa-md shadow-1">
          <p>Scroll down inside this small box to trigger the intersection observer.</p>
          <div style="height: 100px; overflow-y: auto;" class="bg-blue-1 rounded-borders q-pa-sm">
            <div style="height: 150px;">
              Scroll down...
            </div>
            <!-- The intersection observer component -->
            <q-intersection transition="scale" class="bg-primary text-white q-pa-md text-center rounded-borders">
              I am now visible!
            </q-intersection>
          </div>
        </q-card>
      </div>
      <q-separator />

      <!-- ৬৫. Popup Edit -->
      <div>
        <h5 class="text-secondary q-mb-sm">65. Popup Edit</h5>
        <q-card class="q-pa-md shadow-1">
          <div class="cursor-pointer text-primary text-h6">
            {{ myName || 'Click me to edit my name!' }}
            <!-- The popup edit component -->
            <q-popup-edit v-model="myName" auto-save v-slot="scope">
              <q-input 
                v-model="scope.value" 
                dense 
                autofocus 
                counter 
                @keyup.enter="scope.set"
              >
                <template v-slot:append>
                  <q-icon name="edit" />
                </template>
              </q-input>
            </q-popup-edit>
          </div>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Popup Edit Data
const myName = ref('Sams Alif')
</script>
<template>
  <q-page padding>
    <h4 class="text-primary text-center">UI Components (41 to 45)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৪১. Linear Progress -->
      <div>
        <h5 class="text-secondary q-mb-sm">41. Linear Progress</h5>
        <q-linear-progress :value="0.6" color="primary" class="q-mt-sm" />
        <q-linear-progress indeterminate color="secondary" class="q-mt-md" />
      </div>
      <q-separator />

      <!-- ৪২. Pagination -->
      <div>
        <h5 class="text-secondary q-mb-sm">42. Pagination</h5>
        <div class="flex flex-center">
          <q-pagination
            v-model="current"
            :max="5"
            direction-links
            color="primary"
          />
        </div>
      </div>
      <q-separator />

      <!-- ৪৩. Skeleton (Loading placeholder) -->
      <div>
        <h5 class="text-secondary q-mb-sm">43. Skeleton</h5>
        <div class="row items-center no-wrap">
          <q-skeleton type="QAvatar" size="50px" class="q-mr-md" />
          <div class="col">
            <q-skeleton type="text" width="50%" />
            <q-skeleton type="text" width="80%" />
          </div>
        </div>
      </div>
      <q-separator />

      <!-- ৪৪. Space (used for pushing elements apart) -->
      <div>
        <h5 class="text-secondary q-mb-sm">44. Space Example</h5>
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-toolbar-title>Toolbar</q-toolbar-title>
          <q-space />
          <q-btn flat round dense icon="search" class="q-mr-xs" />
          <q-btn flat round dense icon="group_add" />
        </q-toolbar>
      </div>
      <q-separator />

      <!-- ৪৫. Spinners -->
      <div>
        <h5 class="text-secondary q-mb-sm">45. Spinners</h5>
        <div class="q-gutter-md flex flex-center">
          <q-spinner color="primary" size="3em" />
          <q-spinner-audio color="secondary" size="3em" />
          <q-spinner-dots color="accent" size="3em" />
          <q-spinner-hourglass color="purple" size="3em" />
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Pagination Data
const current = ref(3)
</script>
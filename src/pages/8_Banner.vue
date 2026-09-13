<template>
  <q-page padding>
    <h4 class="text-primary">Banner Component</h4>
    <q-banner inline-actions rounded class="bg-orange text-white">
      Your internet connection seems to be offline. Please check your network.
      <template v-slot:action>
        <q-btn flat label="Retry" />
        <q-btn flat label="Dismiss" />
      </template>
    </q-banner>
  </q-page>
</template>

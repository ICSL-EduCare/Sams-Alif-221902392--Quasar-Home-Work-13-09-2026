<template>
  <q-page padding>
    <h4>Page Sticky Example</h4>
    <p v-for="n in 30" :key="n">
      Scroll down to see the sticky button... {{ n }}
    </p>

    <!-- This button sticks to the bottom right -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </q-page>
</template>

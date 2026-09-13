<template>
  <q-page padding>
    <h4>Page Scroller (Back to top)</h4>
    <p v-for="n in 40" :key="n">Scroll down a bit... {{ n }}</p>

    <!-- Button appears when you scroll down to go back to top -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

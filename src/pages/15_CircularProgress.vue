<template>
  <q-page padding>
    <h4 class="text-primary">Circular Progress Component</h4>
    <div class="q-gutter-xl flex flex-center">
      <!-- Standard Progress -->
      <q-circular-progress
        :value="75"
        size="60px"
        color="primary"
        class="q-ma-md"
      />
      <!-- Indeterminate (Loading) Progress -->
      <q-circular-progress
        indeterminate
        size="60px"
        color="accent"
        class="q-ma-md"
      />
      <!-- Progress with label -->
      <q-circular-progress
        show-value
        :value="45"
        size="80px"
        color="positive"
        center-color="grey-9"
        track-color="transparent"
        class="text-white q-ma-md"
      >
        45%
      </q-circular-progress>
    </div>
  </q-page>
</template>
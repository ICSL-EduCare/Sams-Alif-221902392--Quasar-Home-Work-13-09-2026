<template>
  <q-page padding>
    <h4 class="text-primary">Card Component</h4>
    <q-card class="my-card shadow-3" style="max-width: 350px">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-card-section>
        <div class="text-h6">Beautiful Mountains</div>
        <div class="text-subtitle2">Nature Explorer</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Explore" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

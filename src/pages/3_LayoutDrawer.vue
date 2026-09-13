<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="settings" /></q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <h4>Layout with Sidebar Drawer</h4>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

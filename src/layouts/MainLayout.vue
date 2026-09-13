<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar Comprehensive Guide </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar (Drawer) -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label header class="text-weight-bold text-primary">
            Navigation Menu
          </q-item-label>

          <!-- Menu Links -->
          <q-item
            clickable
            v-ripple
            to="/flex"
            exact
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="grid_on" /></q-item-section>
            <q-item-section>Flex Grid (1-5)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/vue-components1"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="widgets" /></q-item-section>
            <q-item-section>Vue Components 1 (6-10)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/vue-components2"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="widgets" /></q-item-section>
            <q-item-section>Vue Components 2 (11-15)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/forms1"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar
              ><q-icon name="text_fields"
            /></q-item-section>
            <q-item-section>Form Components 1 (21-25)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/ui-components1"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="web_asset" /></q-item-section>
            <q-item-section>UI Components 1 (41-45)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/misc1"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="image" /></q-item-section>
            <q-item-section>Misc Components 1 (56-60)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/directives1"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="touch_app" /></q-item-section>
            <q-item-section>Directives 1 (76-80)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/plugins1"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="extension" /></q-item-section>
            <q-item-section>Plugins 1 (86-90)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/composables"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="code" /></q-item-section>
            <q-item-section>Composables (96-100)</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/utils"
            active-class="text-primary bg-blue-1"
          >
            <q-item-section avatar><q-icon name="build" /></q-item-section>
            <q-item-section>Quasar Utils (101-105)</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Content Container -->
    <q-page-container>
      <!-- This is where all the pages will be rendered based on the route -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

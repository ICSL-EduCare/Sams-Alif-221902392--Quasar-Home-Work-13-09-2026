<template>
  <q-page padding>
    <h4 class="text-primary text-center">UI Components (46 to 50)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 600px; margin: 0 auto;">
      
      <!-- ৪৬. Splitter -->
      <div>
        <h5 class="text-secondary q-mb-sm">46. Splitter</h5>
        <q-splitter
          v-model="splitterModel"
          style="height: 150px"
          class="shadow-2 rounded-borders"
        >
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h6">Before</div>
              This is the left side.
            </div>
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h6">After</div>
              This is the right side. You can drag the middle bar!
            </div>
          </template>
        </q-splitter>
      </div>
      <q-separator />

      <!-- ৪৭. Stepper -->
      <div>
        <h5 class="text-secondary q-mb-sm">47. Stepper</h5>
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
          class="shadow-2 rounded-borders"
        >
          <q-step
            :name="1"
            title="Select campaign settings"
            icon="settings"
            :done="step > 1"
          >
            For each ad campaign that you create, you can control how much
            you're willing to spend on clicks and conversions.
          </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="create_new_folder"
            :done="step > 2"
          >
            An ad group contains one or more ads which target a shared set of keywords.
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 2 ? 'Finish' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
      <q-separator />

      <!-- ৪৮. Tabs -->
      <div>
        <h5 class="text-secondary q-mb-sm">48. Tabs</h5>
        <q-card class="shadow-2 rounded-borders">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" icon="mail" label="Mails" />
            <q-tab name="alarms" icon="alarm" label="Alarms" />
            <q-tab name="movies" icon="movie" label="Movies" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
      <q-separator />

      <!-- ৪৯. Timeline -->
      <div>
        <h5 class="text-secondary q-mb-sm">49. Timeline</h5>
        <q-timeline color="secondary">
          <q-timeline-entry heading>
            Timeline heading
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
      <q-separator />

      <!-- ৫০. Tree -->
      <div>
        <h5 class="text-secondary q-mb-sm">50. Tree</h5>
        <q-tree
          :nodes="simple"
          node-key="label"
          default-expand-all
        />
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Splitter Data
const splitterModel = ref(50)

// Stepper Data
const step = ref(1)

// Tabs Data
const tab = ref('mails')

// Tree Data
const simple = [
  {
    label: 'Satisfied customers',
    children: [
      {
        label: 'Good food',
        children: [
          { label: 'Quality ingredients' },
          { label: 'Good recipe' }
        ]
      },
      {
        label: 'Good service',
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' }
        ]
      },
      {
        label: 'Pleasant surroundings',
        children: [
          { label: 'Happy atmosphere' }
        ]
      }
    ]
  }
]
</script>
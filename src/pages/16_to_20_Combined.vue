<template>
  <q-page padding>
    <h4 class="text-primary text-center">Components 16 to 20</h4>

    <div class="q-gutter-y-xl">
      <!-- ১৬. Color Picker -->
      <div>
        <h5 class="text-secondary q-mb-sm">16. Color Picker</h5>
        <q-color v-model="hex" class="my-picker" style="max-width: 250px" />
      </div>
      <q-separator />

      <!-- ১৭. Dialog (Popup) -->
      <div>
        <h5 class="text-secondary q-mb-sm">17. Dialog</h5>
        <q-btn label="Open Dialog" color="primary" @click="dialog = true" />
        <q-dialog v-model="dialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">Alert</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              This is a basic Dialog (popup) component in Quasar!
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
      <q-separator />

      <!-- ১৮. Editor (WYSIWYG) -->
      <div>
        <h5 class="text-secondary q-mb-sm">18. Editor (WYSIWYG)</h5>
        <q-editor v-model="editorText" min-height="10rem" />
      </div>
      <q-separator />

      <!-- ১৯. Expansion Item -->
      <div>
        <h5 class="text-secondary q-mb-sm">19. Expansion Item</h5>
        <div style="max-width: 350px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="explore"
              label="Explore Quasar"
              caption="Discover new components"
            >
              <q-card>
                <q-card-section>
                  Expansion items are great for FAQs and menus where you need to
                  hide/show details!
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
      <q-separator />

      <!-- ২০. Floating Action Button (FAB) -->
      <div>
        <h5 class="text-secondary q-mb-sm">20. Floating Action Button</h5>
        <q-fab color="purple" icon="add" direction="right">
          <q-fab-action
            color="primary"
            @click="onClick"
            icon="mail"
            label="Mail"
          />
          <q-fab-action
            color="secondary"
            @click="onClick"
            icon="alarm"
            label="Alarm"
          />
        </q-fab>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

// Color Picker Data
const hex = ref("#00BCD4");

// Dialog Data
const dialog = ref(false);

// Editor Data
const editorText = ref("Write your awesome text here...");

// Floating Action Button Data & Methods
const $q = useQuasar();
function onClick() {
  $q.notify({
    message: "FAB action clicked!",
    color: "positive",
  });
}
</script>

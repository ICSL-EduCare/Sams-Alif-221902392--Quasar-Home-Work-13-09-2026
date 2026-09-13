<template>
  <q-page padding>
    <h4 class="text-primary text-center">UI Components (51 to 55)</h4>
    
    <div class="q-gutter-y-xl" style="max-width: 800px; margin: 0 auto;">
      
      <!-- ৫১. Table (ডাটা দেখানোর জন্য সবচেয়ে বেশি ব্যবহৃত হয়) -->
      <div>
        <h5 class="text-secondary q-mb-sm">51. Table</h5>
        <q-table
          title="Desserts"
          :rows="rows"
          :columns="columns"
          row-key="name"
          class="shadow-2"
        />
      </div>
      <q-separator />

      <!-- ৫২. Tooltip (মাউস হোভার করলে টেক্সট দেখায়) -->
      <div>
        <h5 class="text-secondary q-mb-sm">52. Tooltip</h5>
        <q-btn color="primary" label="Hover Over Me!">
          <q-tooltip class="bg-accent" :offset="[10, 10]">
            This is a beautiful Quasar Tooltip!
          </q-tooltip>
        </q-btn>
      </div>
      <q-separator />

      <!-- ৫৩. Video (ইউটিউব বা অন্যান্য ভিডিও এমবেড করা) -->
      <div>
        <h5 class="text-secondary q-mb-sm">53. Video Embedded</h5>
        <q-video
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          style="width: 100%; height: 350px"
          class="shadow-2 rounded-borders"
        />
      </div>
      <q-separator />

      <!-- ৫৪. Scroll Area (নির্দিষ্ট জায়গায় স্ক্রলবার তৈরি করা) -->
      <div>
        <h5 class="text-secondary q-mb-sm">54. Scroll Area</h5>
        <q-scroll-area 
          style="height: 150px; max-width: 350px;" 
          class="bg-grey-2 rounded-borders shadow-1"
        >
          <div class="q-pa-md">
            <div v-for="n in 10" :key="n" class="q-py-xs text-grey-8">
              This is scrollable line number {{ n }}
            </div>
          </div>
        </q-scroll-area>
      </div>
      <q-separator />

      <!-- ৫৫. Parallax (স্ক্রল করার সময় ব্যাকগ্রাউন্ড ইমেজ ইফেক্ট) -->
      <div>
        <h5 class="text-secondary q-mb-sm">55. Parallax Effect</h5>
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          height="250"
          class="rounded-borders shadow-2"
        >
          <h3 class="text-white text-center">Beautiful Parallax</h3>
        </q-parallax>
      </div>

    </div>
  </q-page>
</template>

<script setup>
// Table Columns Setup
const columns = [
  { name: 'name', required: true, label: 'Dessert Name', align: 'left', field: 'name', sortable: true },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true }
]

// Table Rows (Data)
const rows = [
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 },
  { name: 'Cupcake', calories: 305, fat: 3.7 }
]
</script>
<template>
  <q-page padding>
    <h4 class="text-primary">Chat Message Component</h4>
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="Me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['Hello! How is the Quasar homework going?']"
        stamp="7 minutes ago"
        sent
        bg-color="primary"
        text-color="white"
      />
      <q-chat-message
        name="Friend"
        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        :text="['It is going great! Almost done with the Vue components.']"
        stamp="4 minutes ago"
        bg-color="grey-3"
      />
    </div>
  </q-page>
</template>
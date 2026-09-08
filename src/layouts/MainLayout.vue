<template>
  <q-layout view="hHh lpR fFf">
    <nav-bar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-bar />
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from 'components/NavBar.vue'
import FooterBar from 'components/FooterBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { NavBar, FooterBar }
})
</script>

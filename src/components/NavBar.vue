<template>
  <q-header elevated class="bg-orange-nav text-black q-py-sm">
    <q-toolbar>
      <q-btn flat round dense icon="menu" class="q-mr-md lt-md" @click="drawer = !drawer" />
      <q-toolbar-title>
        <q-avatar size="70px">
          <img src="/images/logo_white.jpg" alt="Logo">
        </q-avatar>
      </q-toolbar-title>
      <q-space />
      <q-btn
        v-for="link in links"
        :key="link.name"
        flat
        :label="link.name"
        :to="link.path"
        class="gt-sm"
      />
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawer" side="left" overlay behavior="mobile">
    <q-list>
      <q-item avatar class="flex flex-center">
        <img src="/images/logo.jpg" alt="logo" width="180px" class="q-pa-md">
      </q-item>
      <q-item-label header>Menu</q-item-label>
      <q-item
        v-for="link in links"
        :key="link.name"
        clickable
        :to="link.path"
        v-ripple
      >
        <q-item-section>{{ link.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const drawer = ref(false)
    const links = [
      { name: 'Home', path: '/' },
      { name: 'O nas', path: '/about' },
      { name: 'Grafik', path: '/shedule' },
      { name: 'Składki członkowskie', path: '/priceList' },
      { name: 'Kontakt', path: '/contact' },
      { name: 'Do pobrania', path: '/download' },
      { name: 'Newsy', path: '/news' }
    ]
    return { drawer, links }
  }
})
</script>

<style scoped>
.q-toolbar {
  transition: background-color .3s;
}
.bg-orange-nav {
  background-color: #df7f00;
}
</style>

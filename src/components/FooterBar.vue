<template>
  <q-footer class="bg-grey-9 q-pa-sm row justify-center">
    <div class="row justify-center items-center">
      <q-btn
        v-for="social in socials"
        :key="social.icon"
        :href="social.url"
        target="_blank"
        size="lg"
        flat
        dense
        color="white"
        class="q-mx-md flex flex-center"
      >
        <img :src="social.source" width="40px">
      </q-btn>
      <q-btn
        @click="showDialog"
        class="justify-end percent q-mr-md bg-orange-8"
        :style="percentStyle"
      >
        <q-img src="/icons/pro.png" width="50px" />
      </q-btn>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'FooterBar',
  setup() {
    const $q = useQuasar()

    const socials = [
      { icon: 'facebook', source: '/icons/fb.png', url: 'https://www.facebook.com/ks.taekwon' },
      { icon: 'instagram', source: '/icons/tiktok.png', url: 'https://www.tiktok.com/@kstaekwon?_t=ZN-8u0rgPOfU6I&_r=1' },
      { icon: 'tiktok', source: '/icons/instagram.png', url: 'https://www.instagram.com/kstaekwon/' }
    ]

    const isMobile = computed(() => $q.screen.lt.md)
    const percentStyle = computed(() => ({
      position: 'absolute',
      right: 0,
      border: '4px solid white',
      ...(isMobile.value ? { bottom: '70px' } : {})
    }))

    function showDialog() {
      $q.dialog({
        title: 'Wesprzyj nasz Klub',
        message: `
          <div class="dialog-content">
            <p class="text-body1">
              W 2021r otrzymaliśmy status organizacji pożytku publicznego
              <strong>nr rejestru KRS 0000071260</strong>.
            </p>
          </div>
        `,
        html: true,
        ok: {
          label: 'Zamknij',
          color: 'orange-8',
          unelevated: true,
          class: 'q-py-sm q-px-md text-bold'
        },
        persistent: true,
        dark: true
      })
    }

    return { socials, percentStyle, showDialog }
  }
})
</script>

<style scoped>
.bg-dark {
  background-color: #070707;
}
.dialog-content {
  text-align: center;
  padding: 10px;
}
.text-body1 {
  font-size: 1.1rem;
  color: #eee;
  line-height: 1.5;
}
</style>

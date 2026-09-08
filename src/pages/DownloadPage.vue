<template>
  <q-page class="flex flex-center">
    <q-card class="custom-card">
      <div class="q-pa-md content-wrapper">
        <h5 class="downloads-title">Pliki do pobrania</h5>
        <p class="description">
          Poniżej znajdują się pliki PDF do pobrania. Kliknij, aby pobrać.
        </p>
        <div class="q-mt-md column items-center full-width">
          <q-btn
            v-for="(file, i) in files"
            :key="i"
            :label="file.name"
            color="grey-7"
            size="md"
            :href="file.url"
            target="_blank"
            download
            class="q-my-sm q-pa-sm full-width"
          />
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DownloadPage',
  setup() {
    const files = ref([
      { name: 'Deklaracja członkowska - dorośli', url: '/files/deklaracja.pdf' },
      { name: 'Deklaracja członkowska - dzieci', url: '/files/deklaracja_junior.pdf' },
      { name: 'Statut O.P.P. KS Taekwon', url: '/files/deklaracja_junior.pdf' },
      { name: 'Polityka ochrony dzieci', url: '/files/pod.pdf' }
    ])
    return { files }
  }
})
</script>

<style scoped>
.custom-card {
  min-width: 320px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 12px #0000001a;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 10px;
}
.content-wrapper {
  text-align: center;
}
.downloads-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}
.description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
}
.full-width {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.q-btn.full-width {
  width: 100%;
  max-width: 400px;
}
</style>

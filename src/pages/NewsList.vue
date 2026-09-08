<template>
  <q-page class="q-pa-md">
    <div v-if="news.length === 0" class="q-pa-md text-center text-h6 text-grey-7">
      Brak newsów
    </div>
    <q-list v-else class="news-list">
      <q-card v-for="item in news" :key="item.id" class="q-mb-md">
        <q-card-section class="row items-center">
          <q-avatar square size="40px" class="q-mr-sm">
            <q-icon
              :name="item.type === 'Warning' ? 'warning' : item.type === 'Primary' ? 'info' : 'help'"
              :color="item.type === 'Warning' ? 'red' : item.type === 'Primary' ? 'blue' : 'orange'"
              size="lg"
            />
          </q-avatar>
          <div>
            <div class="text-bold text-primary">{{ item.title }}</div>
            <div class="text-caption text-grey-7">{{ item.date }}</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-body1">{{ item.content }}</div>
        </q-card-section>
        <q-img
          v-if="item.url"
          :src="item.url"
          :style="{ height: imageHeight(item.url) }"
          class="news-image q-my-md"
          fit="contain"
        />
      </q-card>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'boot/firebase'

export default defineComponent({
  name: 'NewsList',
  setup() {
    const news = ref([])
    const imageSizes = ref({})

    function loadImageSize(url) {
      if (!url || imageSizes.value[url]) return
      const img = new Image()
      img.src = url
      img.onload = () => {
        imageSizes.value[url] = { width: img.width, height: img.height }
      }
    }

    function imageHeight(url) {
      const size = imageSizes.value[url]
      if (!size) return '200px'
      return size.height > size.width ? '500px' : '300px'
    }

    onMounted(async () => {
      const snapshot = await getDocs(collection(db, 'news'))
      news.value = snapshot.docs.map((doc) => {
        const data = doc.data()
        if (data.url) loadImageSize(data.url)
        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          type: data.type,
          url: data.url || '',
          date: data.date || ''
        }
      })
    })

    return { news, imageHeight }
  }
})
</script>

<style scoped>
.news-list {
  max-width: 900px;
  margin: 0 auto;
}
.q-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px #0000001a;
}
.news-image {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.text-bold {
  font-size: 1.2rem;
}
</style>

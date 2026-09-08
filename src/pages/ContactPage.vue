<template>
  <q-page class="flex flex-center">
    <q-card class="custom-card q-my-sm">
      <div class="q-pa-md content-wrapper">
        <h5 class="club-title">Klub Sportowy Taekwon</h5>
        <p class="address">
          <strong>Adres rejestrowy:</strong><br>
          83-050 Bielkówko, ul. Gregorkiewicza 76<br>
          <strong>NIP:</strong> 5932278334
        </p>
        <div id="map" class="map-container"></div>
        <div class="q-mt-md">
          <h4 class="section-title">Sekcje klubu:</h4>
          <ul class="location-list">
            <li v-for="(loc, i) in locations" :key="i">
              <q-icon name="location_on" class="icon" /> {{ loc.title }}
            </li>
          </ul>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const $q = useQuasar()
    const isMobile = computed(() => $q.screen.lt.md)
    const zoom = computed(() => (isMobile.value ? 12.5 : 13.5))

    const mapOptions = ref({
      center: { lat: 54.2705, lng: 18.4891 },
      zoom: zoom.value
    })

    const locations = ref([
      { lat: 54.2786, lng: 18.4768, title: 'Szkoła Podstawowa w Kolbudach, Wybickiego 33, 83-050' },
      { lat: 54.2569, lng: 18.4792, title: 'Szkoła Podstawowa w Pręgowie, Bukowskiego 3, 83-050' },
      { lat: 54.2601, lng: 18.5121, title: 'Szkoła Podstawowa w Bielkówku, Gregorkiewicza 11, 83-050' }
    ])

    onMounted(() => {
      if (!window.google || !window.google.maps) {
        const script = document.createElement('script')
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAPs8DYovG1tzBU8BlzNDYGlMklarN7YsQ&callback=initMap'
        script.async = true
        script.defer = true
        document.head.appendChild(script)
        script.onload = () => initMap()
      } else {
        initMap()
      }
    })

    function initMap() {
      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions.value)
      const infoWindow = new window.google.maps.InfoWindow()
      locations.value.forEach((loc) => {
        const marker = new window.google.maps.Marker({
          position: loc,
          map,
          title: loc.title
        })
        marker.addListener('click', () => {
          infoWindow.setContent(loc.title)
          infoWindow.open(map, marker)
        })
      })
    }

    return { locations }
  }
})
</script>

<style scoped>
.custom-card {
  min-width: 320px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 4px 12px #0000001a;
  border-radius: 12px;
  overflow: hidden;
}
.content-wrapper {
  text-align: center;
}
.club-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}
.address {
  font-size: .9rem;
  color: #666;
  line-height: 1.5;
}
.map-container {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px #0000001a;
  margin-top: 15px;
}
.section-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 20px;
  color: #444;
}
.location-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}
.location-list li {
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  transition: background .3s ease;
}
.location-list li:hover {
  background: #e3f2fd;
}
.icon {
  color: #1e88e5;
  margin-right: 8px;
}
</style>

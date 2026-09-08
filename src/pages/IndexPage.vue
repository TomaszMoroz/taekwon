<template>
  <q-page class="carousel-page flex justify-center" :style-fn="styleFn">
    <q-carousel
      v-model="slide"
      class="absolute-full"
      animated
      :navigation="false"
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      :height="carouselHeight"
    >
      <q-carousel-slide contain :name="1" img-src="/pictures/daniel_home.jpg" />
      <q-carousel-slide contain :name="2" img-src="/carousel/slide1.jpg" />
      <q-carousel-slide contain :name="3" img-src="/carousel/slide2.jpg" />
      <q-carousel-slide contain :name="4" img-src="/carousel/slide3.jpg" />
      <q-carousel-slide contain :name="5" img-src="/carousel/slide4.jpg" />
    </q-carousel>
    <div class="slider_section">
      <div class="slider_heading">
        <h2 class="shadow column items-center" :style="{ 'font-size': headingSize }">
          <div>K.S. <span>Taekwon</span></div>
        </h2>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const $q = useQuasar()
    const autoplay = ref(true)
    const slide = ref(1)
    const offset = ref(0)

    const carouselHeight = computed(() => `calc(100vh - ${offset.value}px)`)
    const isMobile = computed(() => $q.screen.lt.md)
    const headingSize = computed(() => (isMobile.value ? '2.5rem' : '3.5rem'))

    function styleFn(value) {
      offset.value = value
    }

    return { autoplay, slide, carouselHeight, headingSize, styleFn }
  }
})
</script>

<style scoped>
.slider_section {
  position: absolute;
  top: 20px;
  left: -100px;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
.slider_heading {
  position: absolute;
  background-image: url(/images/brush.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  top: 20vh;
  padding: 0 20px;
  left: 0;
  transform: rotate(270.5deg) scaleX(1);
}
.slider_heading h2 {
  text-transform: uppercase;
  font-weight: 700;
  color: #d6d3d3;
}
.slider_heading h2 span {
  color: #df7f00;
}
.handwrite {
  font-family: Handwrite;
}
.shadow {
  text-shadow: 1px 1px 2px rgb(0, 0, 0), 0 0 1em rgb(0, 0, 0);
}
</style>

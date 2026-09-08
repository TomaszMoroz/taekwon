<template>
  <q-page class="q-pa-md">
    <q-card class="membership-card">
      <q-card-section>
        <div class="title text-h5">Składki Członkowskie</div>
        <div class="info">
          <p><strong class="text-bold">Roczna składka członkowska:</strong> 100zł miesięcznie</p>
          <p><strong class="text-bold">Ulgi i zwolnienia:</strong></p>
          <q-list class="membership-list">
            <q-item v-for="(item, i) in discounts" :key="i" class="q-pa-none">
              <q-item-section>
                <q-item-label class="text-bold">{{ item.title }}</q-item-label>
                <q-item-label>{{ item.description }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <p><strong class="text-bold">Okres wakacyjny:</strong> Członkowie mogą zawiesić opłacanie składek w okresie wakacyjnym.</p>
          <p><strong class="text-bold">Ważne:</strong> Składki członkowskie nie stanowią odpłatności za prowadzone przez Klub zajęcia, a jedynie uprawniają do udziału w organizowanych przez Klub aktywnościach (zgodnie z wiekiem i poziomem zaawansowania).</p>
        </div>
      </q-card-section>
      <q-card-section class="payment-info">
        <div class="title text-h5">Opłata składek członkowskich</div>
        <q-list class="payment-list">
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-none"><strong>Gotówką:</strong> U trenerów na zajęciach</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label class="q-mb-none"><strong>Na konto:</strong></q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label class="text-bold">Sekcja Taekwon-do:</q-item-label>
              <q-item-label class="q-pl-md">Bank Spółdzielczy w Pruszczu Gdańskim</q-item-label>
              <q-item-label class="q-pl-md">65 8335 0003 0403 3233 2000 0001</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label class="text-bold">Sekcja Boks:</q-item-label>
              <q-item-label class="q-pl-md">Nest Bank</q-item-label>
              <q-item-label class="q-pl-md">02 1870 1045 2078 1069 0531 0004</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label><strong>W tytule przelewu prosimy wpisać:</strong> składka członkowska za miesiąc (imię i nazwisko członka klubu)</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PriceList',
  setup() {
    const discounts = [
      { title: 'Składka członkowska rodzinna', description: '150zł (rodzina – rodzeństwo lub rodzic plus dziecko)' },
      { title: 'Czarne pasy', description: '50zł' },
      { title: 'Członkowie Instruktorzy', description: '0zł (czynnie prowadzący zajęcia, pomagający w ramach wolontariatu)' },
      { title: 'Osoby w trudnej sytuacji finansowej/życiowej', description: '0zł (po uzgodnieniu z Zarządem Klubu)' }
    ]
    return { discounts }
  }
})
</script>

<style scoped>
.membership-card {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 16px;
  background: linear-gradient(145deg, #fff, #f0f0f5);
  box-shadow: 0 4px 12px #0000001a;
  overflow: hidden;
}
.q-card-section {
  padding: 16px 24px;
}
.title {
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
}
.info p,
.payment-info q-item-label {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}
.text-bold {
  font-weight: 600;
}
.membership-list .q-item {
  background-color: #fafafa;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 12px;
  transition: background-color .3s ease;
}
.membership-list .q-item:hover {
  background-color: #f0f0f0;
}
.q-item-label {
  font-size: 16px;
  line-height: 1.5;
}
.payment-list .q-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
}
.payment-info {
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}
.q-item-section .q-item-label {
  color: #2c3e50;
}
.q-item-section .q-item-label.text-bold {
  color: #27ae60;
}
</style>

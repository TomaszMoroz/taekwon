<template>
  <q-page class="q-pa-md">
    <q-tabs
      v-model="activeTab"
      class="bg-grey-8 text-white shadow-2 q-mb-md"
      align="justify"
    >
      <q-tab name="trainers" label="Kadra instruktorska" />
      <q-tab name="club" label="Nasz klub" />
      <q-tab name="history" label="Taekwon-do I.T.F." />
    </q-tabs>

    <q-tab-panels
      v-model="activeTab"
      animated
      transition-next="fade-in"
      transition-prev="fade-out"
      class="column"
    >
      <q-tab-panel name="trainers" class="col" style="background-color: rgb(234, 234, 234)">
        <div class="row space-between">
          <div
            v-for="trainer in trainers"
            :key="trainer.id"
            class="col-xs-12 col-sm-6 col-md-4"
          >
            <q-card class="full-width trainer">
              <q-card-section class="text-center">
                <q-avatar size="100px">
                  <q-img :src="`/pictures/${trainer.avatar}`" fit="cover" />
                </q-avatar>
                <div class="text-h6 q-mt-sm">{{ trainer.name }}</div>
                <div class="text-caption text-grey">{{ trainer.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="club" class="bg-grey-3">
        <q-card class="q-mb-md">
          <q-card-section class="flex flex-center">
            <q-img :src="logo" class="q-mb-md q-mr-md" width="150px" />
            <div class="text-h5 text-center">Klub Sportowy Taekwon</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <p>
              Klub Sportowy Taekwon został założony 12 listopada 1995 roku, początkowo
              funkcjonował pod nazwą Klub Sportowy Taekwon Kolbudy I.T.F. Od 2002r Klub
              jest członkiem Polskiego Związku Taekwon-do I.T.F.
            </p>
            <p>
              W 2021 roku klub uzyskał status organizacji pożytku publicznego. W miarę
              rozwoju klubu, zmienił swoją nazwę na Klub Sportowy Taekwon i przeniósł
              siedzibę do Bielkówka. Obecnie Klub Sportowy Taekwon prowadzi zajęcia na
              terenach gmin Kolbudy, organizuje obozy sportowe i seminaria szkoleniowe.
            </p>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Osiągnięcia</div>
            <p>
              Nasi sportowcy wielokrotnie zdobywali tytuły Mistrzów Polski, medale
              Mistrzostw Europy oraz Pucharu Świata. Nasze bieżące osiągniecia można
              śledzić na naszym fanepage:
            </p>
            <q-btn
              flat
              color="primary"
              label="Facebook"
              icon="fab fa-facebook"
              href="https://www.facebook.com/ks.taekwon"
              target="_blank"
            />
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="history" class="bg-grey-3">
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Czym jest Taekwon-do ITF?</div>
            <p>
              Taekwon-do ITF (International Taekwon-Do Federation) to jedna z głównych
              organizacji taekwondo na świecie, założona w 1966 roku przez generała
              Choi Hong Hi - twórcę Taekwon-do. Taekwon-do w Polsce trenuje się od 1974
              roku. Pierwsza sekcja Taekwon-do powstała w czerwcu 1974 roku w Lublinie.
            </p>
            <p>
              To droga do ciągłego doskonalenia siebie. Każdy stopień zaawansowania,
              każda nowa technika i każda zdobyta umiejętność to krok naprzód w
              osobistym rozwoju. Nauka pokonywania własnych ograniczeń i dążenie do
              doskonałości to wartości, które przenoszą się na wszystkie aspekty życia.
            </p>
            <p>
              Ćwiczenia wzmacniające, rozciągające i techniki walki przyczyniają się do
              rozwinięcia siły, wytrzymałości, gibkości i koordynacji. Regularne
              treningi pomagają utrzymać zdrową sylwetkę i poprawiają ogólną sprawność
              fizyczną.
            </p>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Dlaczego warto trenować Taekwon-do ITF?</div>
            <q-list bordered separator>
              <q-item v-for="(reason, i) in reasons" :key="i">
                <q-item-section>
                  <q-item-label><strong>{{ reason.title }}</strong></q-item-label>
                  <q-item-label caption>{{ reason.text }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Dołącz do świata Taekwon-do ITF!</div>
            <p>
              Zacznij swoją przygodę z Taekwon-do ITF i odkryj, jak wiele możesz
              zyskać. Niezależnie od wieku czy poziomu zaawansowania, każdy znajdzie
              coś dla siebie. Wejdź na matę, poczuj energię i przekonaj się, jak
              Taekwon-do ITF może wzbogacić Twoje życie! Gotowy, żeby zacząć?
            </p>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'trainers',
      logo: '/images/logo.jpg',
      trainers: [
        { id: 1, name: 'Daniel Nowakowski', avatar: 'Daniel.jpg', description: 'Trener Taekwon-do. IV DAN' },
        { id: 2, name: 'Joanna Linkowska-Nowakowska', avatar: 'Asia.jpg', description: 'Trener Taekwon-do. I DAN' },
        { id: 3, name: 'Oliwer Herbszt', avatar: 'Oliwer.jpg', description: 'Instruktor Taekwon-do. I CUP' },
        { id: 4, name: 'Bogusia Szymandera', avatar: 'bogusia.jpg', description: 'Instruktor Taekwon-do. I CUP' },
        { id: 5, name: 'Tomasz Moroz', avatar: 'moro.jpg', description: 'Trener Taekwon-do/Boks. II DAN' }
      ],
      reasons: [
        { title: 'Kompleksowy rozwój fizyczny', text: 'Trening Taekwon-do ITF poprawia kondycję fizyczną, wzmacnia mięśnie, rozwija gibkość i koordynację.' },
        { title: 'Umiejętności samoobrony', text: 'Opanujesz skuteczne techniki obrony, zwiększając swoje poczucie bezpieczeństwa.' },
        { title: 'Rozwój mentalny i emocjonalny', text: 'Taekwon-do kształtuje cechy jak samodyscyplina, uprzejmość i wytrwałość.' },
        { title: 'Społeczność i przyjaźnie', text: 'Treningi to okazja do nawiązywania nowych znajomości i budowania wspólnoty.' },
        { title: 'Możliwość rywalizacji', text: 'Uczestnictwo w zawodach, od lokalnych turniejów po międzynarodowe mistrzostwa.' },
        { title: 'Rozwój osobisty', text: 'Każdy trening to krok naprzód w samodoskonaleniu i pokonywaniu ograniczeń.' }
      ]
    }
  }
}
</script>

<style scoped>
.q-card {
  transition: transform .3s ease-in-out;
}
.q-card.trainer:hover {
  transform: scale(1.1);
  z-index: 1000;
}
</style>

<template>
  <q-page class="q-pa-md pic">
    <div class="q-pa-md">
      <div class="row justify-center q-col-gutter-md">
        <q-select
          v-model="location"
          @update:model-value="group = 'Początkująca'"
          :options="locations"
          label="Wybierz miejsce"
          dense
          filled
          color="orange-8"
          :class="selectClass"
        />
        <q-select
          v-if="location === 'Kolbudy Taekwon-do'"
          v-model="group"
          :options="groups"
          label="Wybierz grupę"
          dense
          filled
          color="orange-8"
          :class="selectClass"
        />
      </div>
      <div class="flex flex-center text-h5 q-pa-md">
        Grafik - S.P. {{ location }}, grupa {{ group.toLowerCase() }}
      </div>
      <q-table
        grid
        flat
        bordered
        card-class="bg-grey-7 text-white text-bold text-body1 text-center col-xs-12 col-sm-6 col-md-4"
        card-container-class="flex row justify-center"
        :rows="rows"
        :columns="columns"
        row-key="name"
        hide-header
        hide-pagination
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'

const schedule = {
  'Kolbudy Taekwon-do': {
    'Grupa początkująca': { 'Środa': '18:30', 'Piątek': '17:30' },
    'Grupa średnia': { 'Wtorek': '18:30', 'Piątek': '18:30' },
    'Grupa zawodnicza': { 'Wtorek': '19:30', 'Piątek': '19:30', 'Środa': '19:30' }
  },
  'Kolbudy Boks': {
    'Grupa początkująca': { 'Poniedziałek': '19:30', 'Czwartek': '19:30' }
  },
  'Bielkówko Taekwon-do': {
    'Grupa początkująca': { 'Środa': '15:00', 'Piątek': '15:00' }
  },
  'Pręgowo Taekwon-do': {
    'Grupa początkująca': { 'Wtorek': '14:30 - 16:30', 'Czwartek': '14:30 - 16:30' }
  }
}

export default defineComponent({
  name: 'TrainingSchedule',
  setup() {
    const $q = useQuasar()
    const location = ref('Kolbudy Taekwon-do')
    const group = ref('Początkująca')

    const locations = computed(() => Object.keys(schedule))
    const groups = computed(() => {
      const all = ['Początkująca', 'Średnia', 'Zawodnicza']
      return location.value === 'Kolbudy Taekwon-do' ? all : 'Początkująca'
    })
    const currentSchedule = computed(() => {
      const loc = schedule[location.value]
      const key = Object.keys(loc).find(k => k.includes(group.value.toLowerCase()))
      return loc[key]
    })
    const columns = computed(() => [
      { name: 'day', field: 'day', align: 'center' },
      { name: 'hour', field: 'hour', align: 'center' }
    ])
    const rows = computed(() =>
      Object.entries(currentSchedule.value).map(([day, hour], index) => ({ day, hour, index }))
    )
    const isMobile = computed(() => $q.screen.lt.md)
    const selectClass = computed(() => (isMobile.value ? 'col-8 q-mx-lg' : 'col-3'))

    return { location, group, locations, groups, columns, rows, selectClass }
  }
})
</script>

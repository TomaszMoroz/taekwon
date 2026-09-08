import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCjuQcWsYYH_SozRq70nhVaI_xazzQ1_Dc',
  authDomain: 'taekwonnews-72d44.firebaseapp.com',
  projectId: 'taekwonnews-72d44',
  storageBucket: 'taekwonnews-72d44.firebasestorage.app',
  messagingSenderId: '185459030468',
  appId: '1:185459030468:web:6c5f54b93d84a8afb04c91',
  measurementId: 'G-8Z2L2MB9X1'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

export default boot(({ app }) => {
  app.config.globalProperties.$db = db
})

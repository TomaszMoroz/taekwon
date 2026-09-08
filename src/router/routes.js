const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'shedule', component: () => import('pages/TrainingSchedule.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'priceList', component: () => import('pages/PriceList.vue') },
      { path: 'download', component: () => import('pages/DownloadPage.vue') },
      { path: 'news', component: () => import('pages/NewsList.vue') },
      { path: '/:pathMatch(.*)', component: () => import('pages/ErrorNotFound.vue') }
    ]
  }
]

export default routes

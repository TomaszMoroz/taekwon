import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default route(function (/* { store, ssrContext } */) {
  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createWebHistory(process.env.VUE_ROUTER_BASE)
  })

  router.afterEach((to) => {
    if (to.path !== '/error') {
      sessionStorage.setItem('lastVisitedPath', to.fullPath)
    }
  })

  router.isReady().then(() => {
    const last = sessionStorage.getItem('lastVisitedPath')
    if (last && last !== '/' && router.currentRoute.value.fullPath === '/') {
      router.replace(last)
    }
  })

  return router
})

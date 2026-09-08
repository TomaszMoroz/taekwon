// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { configure } from 'quasar/wrappers'
import 'dotenv/config'

export default configure(function (/* ctx */) {
  return {
    boot: [
      'firebase'
    ],

    css: [
      'app.css'
    ],

    extras: [
      'roboto-font',
      'material-icons',
      'fontawesome-v6'
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },

      vueRouterMode: 'history',

      env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
      },

      vitePlugins: []
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      plugins: [
        'Dialog'
      ]
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render']
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },

    cordova: {},
    capacitor: { hideSplashscreen: true },
    electron: {
      bundler: 'packager',
      inspectPort: 5858,
      builder: { appId: 'ks-taekwon' }
    },

    bex: { contentScripts: ['my-content-script'] }
  }
})

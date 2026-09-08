// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

const { configure } = require('quasar/wrappers')

module.exports = configure(function (/* ctx */) {
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

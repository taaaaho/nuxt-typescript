import NuxtConfiguration from '@nuxt/config'
const pkg = require('./package')

const nuxtConfig: NuxtConfiguration = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-startup-image', href: '/splash/splash-1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
 css: [
    '@/assets/css/common.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],

  /**
   * Pwa manifest
   */
  manifest: {
    name: 'nuxt-pwa-sample',
    lang: 'ja',
    short_name: 'Nuxt PWA',
    title: 'nuxt-pwa',
    display: 'standalone',
    'og:title': 'nuxt-pwa',
    description: 'nuxt-pwa',
    'og:description': 'nuxt-pwa',
    theme_color: '#000000',
    background_color: '#000000',
    icons: [
      {
        src: "static/icon.png",
        sizes: "512x512",
        type: "image/png",
      }
    ]
  },
  workbox: {
    dev: true, //開発環境でもPWA
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /**
   * Web push notification
   */
  oneSignal: {
    init: {
      appId: '78ae173a-18bd-45d6-8e03-95170a1b0d19',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return  // undefinedの場合、pushせずにreturnするように追加
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
export default nuxtConfig

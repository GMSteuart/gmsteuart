import NuxtConfiguration from '@nuxt/config'
import pkg from './package.json'
import * as path from 'path'

const config: NuxtConfiguration = {
  mode: 'universal',
  env: {},
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/fonts.css', // !custom
    '@/assets/css/AbitareSans.css', // !custom
    '@/assets/css/tailwind.css', // !tailwinds
    'highlight.js/styles/default.css', //! vue-highlight
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-lazyload',
    '~/plugins/vue-highlight' // !vue-highlight
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-purgecss' // !tailwinds
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    debug: process.env.APP_ENV !== 'production',
    https: true,
    baseURL: 'https://contentacms-api.lndo.site/api'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // !tailwinds-start
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        'postcss-url': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
+    ** Extract CSS
+    */
    extractCSS: true,
    // !tailwinds-end
    // Used for HMR: https://nuxtjs.org/guide/development-tools
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (config.module && ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(ts|vue)$/,
    //       loader: 'tslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}

export default config

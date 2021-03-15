export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rirboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    { src: '~assets/main.styl', lang: 'stylus' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
 /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
      // https://github.com/Krutie/nuxt-components-demo/blob/master/nuxt.config.js
      // https://ru.nuxtjs.org/blog/improve-your-developer-experience-with-nuxt-components/#lazy-loading-your-components
   */
  // components: true,
  components: [
    '~/components', // shortcut to { path: '~/components' }
    {
      path: '~/components/slider/',
      prefix: 'Slider',
      ignore: ['**/*.js'],
    }
  ],
  

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    //
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    stylus: ['~/assets/_vars.styl'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

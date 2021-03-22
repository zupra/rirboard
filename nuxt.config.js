export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

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
    // '~tailwind.css',
    { src: '~assets/main.styl', lang: 'stylus' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',
    '@/plugins/antd-ui',
    '~/plugins/notifier.js',
  ],

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
    // {
    //   path: '~/components/slider/',
    //   prefix: 'Slider',
    //   ignore: ['**/*.js'],
    // }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    //
    '@nuxtjs/style-resources',
    // Doc: https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',
  ],
  styleResources: {
    stylus: ['~/assets/_@vars.styl'],
  },
  tailwindcss: {
    // jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //
    '@nuxtjs/auth-next',
    // Doc: https://github.com/nuxt-community/universal-storage-module
    '@nuxtjs/universal-storage',

    '@nuxtjs/toast',
  ],

  toast: {},
  // Doc:: https://go.nuxtjs.dev/config-axios
  axios: {
    withCredentials: true,
    baseURL: 'http://localhost:9090/api/',

    /*
    headers: {
      common: {
        'X-Authorization':
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnbGF6b3ZAcm9zYXRvbS5kZXYiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInVzZXJJZCI6IjU5NjZkYjAwLTg4N2ItMTFlYi04OThiLWYxNjI4YzIzNGMzMSIsImVuYWJsZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiI1OGQyOGE0MC04ODdiLTExZWItODk4Yi1mMTYyOGMyMzRjMzEiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE2MTYxMzU1NDMsImV4cCI6MTYxNjE0NDU0M30.OvWYBK5AFOrzULlZVMepAG-wwTm_Cuicda1JQWtfQZ9c2H4_wTIuvEEBdU4IpbY9utofMXLDzdTZoKNCoMFMvg',
      },
    },
    */
  },

  // Auth Module for NuxtJS  https://auth.nuxtjs.org/

  /**/
  auth: {
    strategies: {
      local: {
        // scheme: 'refresh',
        token: {
          // type: 'Bearer'
          property: 'token',
          // maxAge: 1800,
          name: 'X-Authorization',
        },
        /*
        refreshToken: {
          property: 'refreshToken',
          // data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        */
        user: {
          // autoFetch: false,
          property: 'user',
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          // refresh: { url: 'auth/refresh', method: 'post' },
          user: { url: 'auth/user', method: 'get' },
          // logout: { url: 'auth/logout', method: 'post' },
        },
        // autoLogout: false
      },
    },
  },

  // router: {
  //   middleware: ['auth']
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

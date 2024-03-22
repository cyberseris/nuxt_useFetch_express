export default defineNuxtConfig({ 
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: '/login'
      });
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  head: {

    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
      }
    ]
  },

  css: [
    'vuetify/dist/vuetify.css',
  ],
  serverMiddleware: [
    '~/api/index'
  ],
  components: true,

  buildModules: [
    '@nuxtjs/vuetify'
  ],
  css: ['vuetify/lib/styles/main.sass','vuetify/dist/vuetify.min.css'],
  build: {
    transpile: ['vuetify'],
  },

})

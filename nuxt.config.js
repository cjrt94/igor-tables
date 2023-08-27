export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Igor',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Aquí podrás revisar el estado de todas las mesas de tu restaurante.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#F5A100' },
      { name: 'theme-color', content: '#F5A100' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;200;300;400;500;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap'
      }
    ],
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    '@nuxtjs/toast'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyDV_Aown3QdnFEQh4hxzJT5_A6IlOW1rEM",
      authDomain: "igor-f5349.firebaseapp.com",
      projectId: "igor-f5349",
      storageBucket: "igor-f5349.appspot.com",
      messagingSenderId: "596809366049",
      appId: "1:596809366049:web:25625d48fa7311b1650160",
      measurementId: "G-HNMNTPH06R"
    },
    services: {
      auth: {
        ssr: true
      },
      firestore: true,
      storage: true
    }
  },
  toast: {
    position: 'top-center'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}

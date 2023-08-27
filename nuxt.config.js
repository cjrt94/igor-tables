export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Herodoto Gpt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chant with any PDF or Gpt' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'theme-color', content: '#000000' }
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
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
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
      apiKey: "AIzaSyCK0O4N-qobB0Md-9adO8eHPsIhfPUFSQA",
      authDomain: "herodoto-news.firebaseapp.com",
      projectId: "herodoto-news",
      storageBucket: "herodoto-news.appspot.com",
      messagingSenderId: "155729452980",
      appId: "1:155729452980:web:1a919763bf17828c9f5ce1"
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

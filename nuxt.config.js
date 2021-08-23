export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Galsen Dev | La maison des développeurs sénégalais!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Some meta tag for a better SEO
      { hid: 'description', name: 'description', content: '' },
      { property:'og:type', content:'website' },
      { property:'og:url', content:'https://galsendev.com' },
      { property:'og:description', content:'La maison des développeurs sénégalais!' },
      { property:'og:image', content:'https://galsendev.com/static/share.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Advent+Pro&display=swap" }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/pwa',
  ],

  pwa: {
    meta: {
      title: 'Galsen DEV',
      author: '@galsendevlab',
    },
    manifest: {
      name: 'Galsen Dev | La maison des développeurs sénégalais!',
      short_name: 'GalsenDEV',
      lang: 'fr',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Buefy options here
  // NB : I changed the icon-pack to FontAwesome because
  // the material design icon CDN was inaccessible (maybe they have a problem w/ their servers)
  buefy: {
    materialDesignIconsHRef: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css',
    defaultIconPack: 'fas'
  }
}

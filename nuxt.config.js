export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Galsen DEV',
    htmlAttrs: { lang: 'fr' },
    meta: [
      // Meta & description tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Galsen DEV' },
      { name: 'theme-color', content: '#5271FF' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Galsen DEV' },
      { property: 'og:url', content: 'https://galsendev.com' },
      { property:'og:image', content:'https://galsendev.com/static/share.png' },
      { property:'og:description', content:'Galsen DEV' },
    ],
    link: [
      // Favicon & App Icons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      // Google Fonts
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
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
    '@nuxtjs/robots',
  ],

  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: '/user',
    },
    {
      UserAgent: '*',
      Disallow: '/admin',
    },
  ],

  pwa: {
    meta: {
      title: 'Galsen DEV',
      author: '@galsendevlab',
    },
    manifest: {
      name: 'Galsen DEV',
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

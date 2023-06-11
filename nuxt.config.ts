// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f616.png" }
      ]
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'processe.env.DEBUG': 'false',
    },
  },
})

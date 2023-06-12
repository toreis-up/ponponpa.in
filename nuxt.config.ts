// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f616.png" }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'ｵﾅｶｲﾀｰｲ' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'pͪoͣnͬpͣoͥnͭpͣa͡inͥ' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'ponponpa.in' },
        { hid: 'og:title', property: 'og:title', content: 'pͪoͣnͬpͣoͥnͭpͣa͡inͥ' },
        { hid: 'og:description', property: 'og:description', content: 'お腹が痛い時に共有しましょう。' },
        { hid: 'og:image', property: 'og:image', content: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f616.png' },
        { name: 'twitter:card', content: 'summary' }//　twitterの画像サイズ
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

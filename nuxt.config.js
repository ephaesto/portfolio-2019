
export default {
  mode: 'universal',
  head: {
    title: "Emeric Lebbrecht",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/4.3.95/css/materialdesignicons.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap' }
    ]
  },

  loading: { color: '#fff' },
 
  css: ['@/assets/styles/styles.sass'],
 
  plugins: [  ],
 
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
 
  modules: [
  ],
 
 build: {
  extend(config, ctx) {
     // Exécuter ESLint lors de la sauvegarde
     if (ctx.isDev && ctx.isClient) {
       config.module.rules.push({
         enforce: "pre",
         test: /\.(js|vue)$/,
         loader: "eslint-loader",
         exclude: /(node_modules)/
       })
     }
   }
  }
}

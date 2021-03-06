const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'},
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red', height: '5px' },

  /*
  ** Global CSS
  */
  css: [
    { src: 'assets/bootstrap/scss/bootstrap-reboot.scss', lang: 'scss' },
    { src: 'assets/bootstrap/scss/bootstrap-grid.scss', lang: 'scss' },
    { src: 'assets/bootstrap/scss/bootstrap.scss', lang: 'scss' },
    'node_modules/vuejs-dialog/dist/vuejs-dialog.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: 'plugins/global.js', ssr: false },
    { src: 'plugins/validate.js', ssr: true },
    { src: 'plugins/truncate.js', ssr: true },
    { src: 'plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/router'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
// npm install --save-dev node-sass sass-loader

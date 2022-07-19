module.exports = {
  devServer: {
    proxy: {
      '^/oauth/v1': {
        target: 'https://sandbox.safaricom.co.ke/',
        ws: true,
        changeOrigin: true,
        logLevel: 'debug',
      },
      '^/mpesa/stkpush/v1': {
        target: 'https://sandbox.safaricom.co.ke/',
        ws: true,
        changeOrigin: true,
        logLevel: 'debug',
      },
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Sariah Wariara";
        return args;
      })
  },
  "transpileDependencies": [
    "vuetify"
  ],
}
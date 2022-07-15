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
  "transpileDependencies": [
    "vuetify"
  ],
}
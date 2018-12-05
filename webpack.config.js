const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/dist"
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT || 8000,
    overlay: true,
    hot: false,
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.dcss$/,
        use: [
            'style-loader',
            'css-loader',
            'dutch-css-loader'
        ]
      }
    ]
  }
};

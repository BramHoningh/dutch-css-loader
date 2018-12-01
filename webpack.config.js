const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/dist"
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
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
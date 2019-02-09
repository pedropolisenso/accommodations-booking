const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/info/index.js'),
  output: {
    path: path.join(__dirname, 'api/assets/js'),
    publicPath: path.join(__dirname, '/js/'),
    filename: 'bundle.js'
  },
  devtool: "#inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

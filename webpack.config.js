const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './js/main.js',
    about: './js/about.new.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'out')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
     contentBase: './out'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
}

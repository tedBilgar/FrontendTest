const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, 'js', 'main.js'),
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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
     contentBase: './out'
  },
  plugins: [
    
    new VueLoaderPlugin()
  ],
  resolve: {
      modules: [
          path.join(__dirname, 'js'),
          path.join(__dirname, 'node_modules'),
      ],
  }
}

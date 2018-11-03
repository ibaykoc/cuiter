'use strict'

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = env => {
  return {
    stats: 'none',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, env === 'production' ? 'build' : 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: ['vue-style-loader', 'style-loader'],
            allChunks: true
          })
        },
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            failOnWarning: true
          }
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        }

      ]
    },
    plugins: [
      // make sure to include the plugin for the magic
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new ExtractTextPlugin('styles.css'),
      new FriendlyErrorsWebpackPlugin()
    ]
  }
}

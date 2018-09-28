var path = require('path')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  "mode": "production",
  externals: {
    'axios': 'axios',
    'qs': 'qs'
  },
  entry: ["babel-polyfill", './src/api-client.js'],
  output: {
    library: "IaipesApiClient",
    libraryTarget: "umd",
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ? 'api-client.min.js' : 'api-client.js',
    globalObject: "(typeof window !== 'undefined' ? window : this)",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { // << add options with presets env
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  resolve: {
    alias: {
      
    },
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


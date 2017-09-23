const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const PATH = {
  src: path.resolve( __dirname, 'src' ),
  public: path.resolve( __dirname, 'public' )
};

const CONFIG = {
  context: PATH.src,
  entry: [
    './index.js',
    './index.scss'
  ],
  output: {
    path: PATH.public,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      Vue: 'vue/dist/vue.min.js'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify( NODE_ENV )
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      }, {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      }
    ]
  }
};

module.exports = CONFIG;

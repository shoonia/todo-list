const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const PATH = {
  src: path.resolve( __dirname, 'src' ),
  public: path.resolve( __dirname, 'public' )
};

const CONFIG = {
  context: PATH.src,
  entry: [
    './index.js'
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
      }
    ]
  }
};

module.exports = CONFIG;

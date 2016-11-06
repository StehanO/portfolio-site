var webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': '"production"'
      }
    })
  ],
  entry: __dirname + '/src/public/js/react-client.js',
  output: {
    path: __dirname + '/src/public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
}

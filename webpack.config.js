var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_awesome.js"
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: __dirname + '/app',
        loader: "babel-loader"
      },
      {
        test: /\.sass/,
        loader: "style!css!sass?sourceMap"
      },
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};

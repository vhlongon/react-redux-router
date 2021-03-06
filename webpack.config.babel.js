import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // inline: true,
    hot: true,
    port: 4242,
    // open: true,
    historyApiFallback: true,
    contentBase: './'
  },
  // resolve: {
  //   extensions: ['', '.js']
  // },
  devtool: 'source-map',//'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4240,
      proxy: 'http://localhost:4242/',
      files: ['dist/css/*.css', 'dist/images/*.*', '**/*.html', '!node_modules/**/*.html']
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/
        // include: path.join(__dirname, 'scripts'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/scss')]
  }
}

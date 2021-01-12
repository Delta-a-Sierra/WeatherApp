const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports  = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
          title: 'WeatherApp',
          template: './src/index.html'
        }),
      ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(svg|mp4)$/i,
            type: 'asset/resource',
          }
        ],
      },
}
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    map: './src/map.js',
    brand: './src/brand.js',
    admire: './src/admire.js',
    detail: './src/detail.js',
    join: './src/join.js',
    series: './src/series.js',
    series_detail: './src/series_detail.js'
  }, // 入口文件
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist')
  }, //输出配置
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.art$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'art-template-loader',
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024*8, // 8k 以下的 base64 内联，不产生图片
            fallback: 'file-loader',
            name: '[name].[ext]?[hash]',
            outputPath: 'image/', // 输出路径
            publicPath: '../image' // 可以问到图片的引用路径
          }
        }
      },
      
    ]
  }, // 放置loader 加载器
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/common'},
      {from: 'src/commonimg'}
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['app','common'],
      cache: true,
      meta: {keywords:'锦泊豪斯,私人定制,家具'}
    }),
    new HtmlWebpackPlugin({
      filename: 'map.html',
      template: './src/map.html',
      chunks: ['map','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'brand.html',
      template: './src/brand.html',
      chunks: ['brand','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'admire.html',
      template: './src/admire.html',
      chunks: ['admire','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: './src/detail.html',
      chunks: ['detail','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'join.html',
      template: './src/join.html',
      chunks: ['join','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'series.html',
      template: './src/series.html',
      chunks: ['series','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename: 'series_detail.html',
      template: './src/series_detail.html',
      chunks: ['series_detail','common'],
      cache: true,
      minify: {
        removeComments: true
      },
      hash: true
    }),
  ], 
  resolve: {}, //为引入的模块起别名
}
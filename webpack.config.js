const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:6].js',
  },
  resolve: {
    // 配置省略文件后缀名
    extensions: ['.js', '.less', '.jsx'],
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@editor": path.resolve(__dirname, "./src/editor"),
      "@lm": path.resolve(__dirname, "./src/editor/LeftMenu"),
      "@coms": path.resolve(__dirname, "./src/components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/i,
        // 使用 loader 处理
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:'url-loader'
      }
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
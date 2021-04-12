const webpack = require("webpack");
const config = require("./config/index");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  //入口
  entry: __dirname + "/src/index.ts",
  //出口
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,

        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": __dirname + "/src",
      "@pages": __dirname + "/src/pages",
    },
  },
  devServer: {
    inline: true,
    host: config.dev.host, //设置服务器的主机号
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
};

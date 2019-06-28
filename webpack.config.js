const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: { index: "./src/index.js", main: "./src/main.js" },

  output: {
    filename: "[name]-[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Generated File",
      template: "src/index.html"
    })
  ]
};

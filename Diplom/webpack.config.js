const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
  filename: "bundle.css",
});

module.exports = {
  entry: "./App.js", // основной файл приложения
  output: {
    path: __dirname, // путь к каталогу выходных файлов
    filename: "bundle.js", // название создаваемого файла
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // какие файлы обрабатывать
        exclude: /node_modules/, // какие файлы пропускать
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: ["css-loader"],
        }),
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [extractCSS],
};

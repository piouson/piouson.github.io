const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const config = require("./config");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: config.pageTitle,
      template: path.resolve(__dirname, "src/index.ejs"),
      templateParameters: config,
      favicon: path.resolve(__dirname, "src/assets/icons/favicon.svg"),
      minify: true,
    }),
    new PrettierPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("precss"),
                  require("autoprefixer")
                ];
              },
            },
          },
          "sass-loader",
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/images/",
              esModule: false,
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/fonts/",
            }
          }
        ],
      },
    ]
  }
};

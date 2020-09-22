const path = require("path");
const config = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const FontminPlugin = require("fontmin-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");

const environment = process.env.NODE_ENV || "production";
const devtool = environment === "dev" ? "inline-source-map" : "source-map";

module.exports = {
  mode: environment,
  entry: path.resolve(__dirname, "src/index.js"),
  devtool: devtool,
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
      inject: true,
    }),
    new PrettierPlugin(),
    new FontminPlugin({
      autodetect: true,
      glyphs: ["\uf0c8"],
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: environment === "production",
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
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
                  require("autoprefixer"),
                ];
              },
            },
          },
          "sass-loader",
        ]
      },
      {
        test: /[.](png|svg|jpe?g|gif)$/,
        loader: "image-webpack-loader",
        enforce: "pre",
        options: {
          disable: true,
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: "url-loader",
        options: {
          limit: 8 * 1024,
          name: "[name]-[hash].[ext]",
          outputPath: "img/",
          esModule: false,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50 * 1024,
            }
          }
        ],
      },
      {
        test: /[.]svg$/,
        loader: "svg-url-loader",
        options: {
          limit: 8 * 1024,
          noquotes: true,
        },
      },
    ]
  }
};

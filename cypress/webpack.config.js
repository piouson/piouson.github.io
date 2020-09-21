module.exports = {
  resolve: {
    extensions: [".js"]
  },
  node: {
    fs: "empty",
    child_process: "empty",
    readline: "empty",
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

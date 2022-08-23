const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  infrastructureLogging: {
    level: "error",
  },
  plugins: [
    // new webpack.ProvidePlugin({ m: "mithril" }),
    // ...
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /\/node_modules\//,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  infrastructureLogging: {
    level: "error",
  },
  devServer: {
    open: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

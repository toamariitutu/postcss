const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    style: path.join(__dirname, 'sass', 'style.scss')
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader", "sass-loader?outputStyle=expanded"]
          }
        )
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};
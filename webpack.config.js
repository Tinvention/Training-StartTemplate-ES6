var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
        /* 
        ** The CSS loader takes a CSS file and returns the CSS with imports and url(...) resolved via webpack's 
        ** The style loader takes CSS and actually inserts it into the page so that the styles are active on the page.
        */
      },
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  devtool: "inline-source-map", // use 'source-map' for production
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })]
}

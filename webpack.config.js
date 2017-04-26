var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'ui.bundle.js',
		publicPath: '/build/',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin("styles.css")
	]
};
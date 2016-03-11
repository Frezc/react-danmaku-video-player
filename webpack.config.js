var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		APP_DIR + '/index.js'
	],

	output: {
		publicPath: "http://localhost:8080/build",
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel'
		}, {
			test: /\.js?/,
			include: APP_DIR,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
		}, {
			test: /\.(svg|woff([\?]?.*)|ttf([\?]?.*)|eot([\?]?.*)|svg([\?]?.*))$/i,
			loader: 'url-loader?limit=10000'
		}]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
	]
}
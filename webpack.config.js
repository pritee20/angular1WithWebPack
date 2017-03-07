var webpack = require('webpack');
var config ={
	context: __dirname + '/app',
	entry: './index.js',
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader!file-loader', exclude: /node_modules/} //file-loader require as file does not load 
		]
	}
};
if(process.env.NODE_ENV === 'production'){
	config.output.path = __dirname + '/dist';
	config.devtool = 'source-map';
}
module.exports = config;
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: [/\.vert$/, /\.frag$/],
				use: 'raw-loader'
			},
			{
				test: /\.(gif|png|jpe?g|svg|xml)$/i,
				use: 'file-loader'
			},
			{
				test: /\.(s*)css$/,
				use:  [  
					'style-loader', 
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'sass-loader'
				]
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.scss']
	},
	output: {
		filename: 'squash.js',
		path: path.resolve(__dirname, 'public')
	},
	mode: 'development',
	plugins: [
		/* new webpack.DefinePlugin({
			'global': {},
			'process.env.NODE_ENV': JSON.stringify('development')
		}), */
		new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: [],
			cleanAfterEveryBuildPatterns: [
				'**/*.js', 
				'**/*.map',
				'!assets/images', 
				'!assets/images/**/*'
			],
		}),
		new HtmlWebpackPlugin({
			hash: true,
			filename: './index.html',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
		new Dotenv()
	],
	/* target: 'node',
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	} */
};
const path         = require('path'),
      TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	'entry'       : {
		'terser': path.resolve('terser.js'),
	},
	'mode'   : 'production',
	'devtool': 'source-map',
	'optimization': {
		'minimize': true,
		'minimizer': [
			new TerserPlugin({
				'cache'    : false,
				'sourceMap': true,
				'terserOptions'  : {
					'sourceMap': true
				}
			})
		]
	},
	output: {
		'path': path.resolve('./dist'),
		'filename': '[name].dev.js'
	}
}
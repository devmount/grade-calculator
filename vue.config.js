process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
	configureWebpack: {
		performance: {
			maxEntrypointSize: 10240000,
			maxAssetSize: 10240000
		},
		output: {
			filename: "js/[name].js",
			chunkFilename: "js/[name].bundle.js",
		},
	},
	productionSourceMap: false,
	publicPath: '/'
}

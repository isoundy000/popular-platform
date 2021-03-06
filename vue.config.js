const extract = process.env.NODE_ENV == 'production';

module.exports = {
	productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
	css: {
		extract, // 是否使用css分离插件 ExtractTextPlugin
		sourceMap: true, // 开启 CSS source maps
		loaderOptions: {}, // css预设器配置项
		modules: false // 启用 CSS modules for all css / pre-processor files.
	},
	devServer: { // 环境配置
		host: 'localhost',
		port: 8080,
		https: false,
		hotOnly: false,
		open: false, //配置自动启动浏览器
		proxy: { // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
			'/v1': {
				target: 'http://47.104.187.178:8000/',
				ws: true,
				changeOrigin: true,
			}
		}
	},
	pluginOptions: { // 第三方插件配置
		// ...
	}
};
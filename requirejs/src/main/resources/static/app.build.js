({
	appDir: './src',
	baseUrl: './js',
	dir: './build',
	optimize: 'none',
	mainConfigFile: './src/js/require.config.js',
	inlineText: false,
	modules: [{
		name: 'app',
//		excludeShallow: ['backbone']
//		include: ['modernizr']
		insertRequire: ['modernizr']
	}, {
		name: 'user'
	}]
})
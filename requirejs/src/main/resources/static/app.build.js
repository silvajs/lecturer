({
	appDir: './src',
	baseUrl: './js',
	dir: './build',
	optimize: 'uglify',
	mainConfigFile: './src/js/require.config.js',
	modules: [{
		name: 'app',
//		excludeShallow: ['backbone']
//		include: ['modernizr']
		insertRequire: ['modernizr']
	}, {
		name: 'user'
	}]
})
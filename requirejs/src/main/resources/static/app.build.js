({
	appDir: './src',
	baseUrl: './js',
	dir: './build',
	mainConfigFile: './src/js/require.config.js',
	modules: [{
	   name: 'lib' 
	}, {
	    name: 'app',
	    exclude: ['lib']
	}]
})
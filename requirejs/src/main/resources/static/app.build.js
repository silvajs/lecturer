({
    appDir: './src',
    baseUrl: './js',
    dir: './build',
    optimize: "none",
    optimizeCss: "standard",
    removeCombined: false,
    keepBuildDir: false,
    inlineText: false,
    stubModules: ['bar'],
//    buildCSS: false,
//    separateCSS: true,
    mainConfigFile: './src/js/require.config.js',
    modules: [{
        name: 'app',
        excludeShallow: ['jquery-ui']
    }]
})
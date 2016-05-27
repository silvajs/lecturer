require.config({
	baseUrl: '/js/',
    paths: {
        'jquery': './lib/jquery.min',
        'backbone': './lib/backbone',
        'underscore': './lib/underscore',
        'bootstrap': './lib/bootstrap/bootstrap',
        'text': './lib/require/text',
        'i18n': './lib/require/i18n',
        'jquery-ui': './lib/jquery-ui'
    },
    shim: {
    	'bootstrap': ['jquery'],
    	'jquery-ui': ['css!/css/jquery-ui', 'css!/css/jquery-ui.theme']
    },
    config: {
        i18n: {
            locale: 'zh-cn'
        }
    },
    map: {
        '*': {
            'css': './lib/require/css'
        }
    }
});
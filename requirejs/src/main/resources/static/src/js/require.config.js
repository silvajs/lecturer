var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh-cn';
if (language) {
	locale = language[1].split('_')[0]
}

requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': './lib/jquery',
		'bootstrap': './lib/bootstrap',
		'modernizr': './lib/modernizr',
		'backbone': './lib/backbone',
		'underscore': './lib/underscore',
		'text': './lib/require/text',
		'jquery.ui': './lib/jquery-ui',
		'css': './lib/require/css',
		'i18n': './lib/require/i18n'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': ['jquery'],
		'jquery.ui': ['css!/css/jquery-ui/jquery-ui.css', 'css!/css/jquery-ui/jquery-ui.theme.css']
	},
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			}
		},
		i18n: {
			locale: typeof locale !== 'undefined' ? locale : 'zh'
		}
	},
	map: {
		'*': {
			'css': './lib/require/css'
		}
	}
});

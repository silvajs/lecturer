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
		'jquery-ui': './lib/jquery-ui',
		'css': './lib/require/css',
		'i18n': './lib/require/i18n'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': ['jquery'],
		'jquery-ui': ['css!/css/jquery-ui/jquery-ui.css', 'css!/css/jquery-ui/jquery-ui.theme.css']
	},
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			}
		},
		i18n: {
			locale: locale
		}
	},
//	map: {
//		'*': {
//			'css': './lib/require/css'
//		}
//	}
});

require([
	'./app/api', 
	'backbone', 
	'i18n!./nls/messages',
	'jquery-ui'
], function(api, Backbone, i18n) {
	
	$('#user').after('<button class="btn btn-default">'+i18n.edit+'</button>');
	
	$('#user').click(function() {
//		api.getUser().then(function(user) {
//			console.log(user);
//		});
		
//		api.getUserByJsonp();
		api.loadUser();
	});
	
});
requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': './lib/jquery',
		'bootstrap': './lib/bootstrap',
		'modernizr': './lib/modernizr',
		'backbone': './lib/backbone',
		'underscore': './lib/underscore',
		'text': './lib/text',
		'jquery-ui': './lib/jquery-ui',
		'css': './lib/require/css'
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
		}
	},
//	map: {
//		'*': {
//			'css': './lib/require/css'
//		}
//	}
});

require(['./app/api', 
         'backbone', 
         'jquery-ui'], function(api) {
	
	$('#user').click(function() {
//		api.getUser().then(function(user) {
//			console.log(user);
//		});
		
//		api.getUserByJsonp();
		api.loadUser();
	});
	
});
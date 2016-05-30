requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': './lib/jquery',
		'bootstrap': './lib/bootstrap',
		'modernizr': './lib/modernizr',
		'backbone': './lib/backbone',
		'underscore': './lib/underscore',
		'text': './lib/text'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': ['jquery']
	},
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			}
		}
	}
});

require(['./app/api', 'backbone'], function(api) {
	
	$('#user').click(function() {
//		api.getUser().then(function(user) {
//			console.log(user);
//		});
		
//		api.getUserByJsonp();
		api.loadUser();
	});
	
});
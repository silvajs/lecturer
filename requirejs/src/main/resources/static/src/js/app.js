requirejs.config({
	baseUrl: '/js',
	urlArgs: '_=' + new Date().getTime(),
	paths: {
		'jquery': './lib/jquery',
		'bootstrap': './lib/bootstrap',
		'modernizr': './lib/modernizr',
		'backbone': './lib/backbone',
		'underscore': './lib/underscore'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': ['jquery']
	},
	map: {
		'*': {
			'jquery': './lib/jquery'
		},
		'app/api2': {
			'jquery': './lib/jquery2'
		}
	}
});

require(['./app/api2', 'backbone'], 
		function(api) {
	$('#user').click(function() {
		api.getUser().then(function(user) {
			console.log(user);
		});
	});
});
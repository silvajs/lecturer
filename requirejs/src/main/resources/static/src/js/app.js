requirejs.config({
	baseUrl: '/js',
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
	}
});

require(['jquery', './app/api', 'modernizr', 'backbone', 'bootstrap'], 
		function($, api, modernizr, Backbone) {
	console.log(Backbone);
	$('#user').click(function() {
		api.getUser().then(function(user) {
			console.log(user);
		});
	});
});
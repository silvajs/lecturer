requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': './lib/jquery'
	}
});

require(['jquery', './app/api'], function($, api) {
	$('#user').click(function() {
		api.getUser().then(function(user) {
			console.log(user);
		});
	});
});
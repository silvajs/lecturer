requirejs.config({
	baseUrl: '/js/',
	paths: {
		'jquery': 'lib/jquery'
	}
});

require(['./app/helper'], function(helper) {
//	console.log(helper.trim('  requirejs  '));
});
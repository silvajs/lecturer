requirejs.config({
	paths: {
		'jquery': './lib/jquery'
	}
})

require(['./helper'], function(helper) {
	console.log(helper.trim('  amd    '));
});
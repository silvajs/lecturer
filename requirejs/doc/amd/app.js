requirejs.config({
	paths: {
		'jquery': './lib/jquery'
	}
})

require(['helper'], function(helper) {
	var str = helper.trim('  amd    ');
	console.log(str);
});
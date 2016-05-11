requirejs.config({
	baseUrl: '/js'
});

require(['helper'], function(helper) {
	var str = helper.trim('   amd    ');
	console.log(str);
});
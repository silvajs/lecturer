requirejs.config({
	baseUrl: '/js',
	paths: {
		'jquery': [
           '//cdn.bootcss.com/jquery/2.2.3/jquery.js',
           './lib/jquery'
		 ]
	}
});

require(['helper'], function(helper) {
	var str = helper.trim('   amd    ');
	console.log(str);
});
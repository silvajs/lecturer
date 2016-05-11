define('helper', ['jquery'], function($) {
	console.log('helper');
	return {
		trim: function(str) {
			return $.trim(str);
		}
	};
});
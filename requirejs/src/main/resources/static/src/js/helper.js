define('helper', ['jquery'], function($) {
	console.log($);
	return {
		trim: function(str) {
			return $.trim(str);
		}
	};
});
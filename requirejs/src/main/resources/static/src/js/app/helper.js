define(['jquery'], function($) {
	console.log('hello helper');
	return {
		trim: function(str) {
			return $.trim(str);
		}
	}
});
define(['jquery'], function($) {
	return {
		add: function() {
			var result = 0;
			var args = Array.prototype.slice.call(arguments);
			args.forEach(function(num) {
				result += num;
			});
			return result;
		}
	};
});
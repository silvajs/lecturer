define(['jquery'], function($) {
	return {
		getUser: function() {
			var def = $.Deferred();
			require(['./app/user'], function(user) {
				def.resolve(user);
			});
			return def;
		}
	}
});
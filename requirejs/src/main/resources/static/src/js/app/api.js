define(['jquery'], function($) {
	return {
		getUser: function() {
			var def = $.Deferred();
			require(['./app/user'], function(user) {
				def.resolve(user);
			});
			return def;
		},
		
		getUserByJsonp: function() {
//			$.ajax({
//				url: 'http://localhost:8066/src/main/resources/static/src/js/jsonp/user.js',
//				dataType: 'jsonp',
//				jsonpCallback: 'onloaded',
//				success: function(data) {
//					console.log(data);
//				}
//			})
			
			require(['http://localhost:8066/src/main/resources/static/src/js/jsonp/user-amd.js'], function(user) {
				console.log(user);
			})
		},
		
		loadUser: function() {
			require(['text!/user.html!strip'], function(template) {
				$('#userinfo').html(template);
			});
		}
	}
});

//function onloaded(user) {
//	console.log(user);
//}
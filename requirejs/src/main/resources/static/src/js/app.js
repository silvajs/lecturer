require([
	'./app/api', 
	'backbone', 
	'i18n!./nls/messages',
	'bootstrap'
], function(api, Backbone, i18n) {
	
	$('#user').after('<button class="btn btn-default">'+i18n.edit+'</button>');
	
	$('#user').click(function() {
//		api.getUser().then(function(user) {
//			console.log(user);
//		});
		
//		api.getUserByJsonp();
		api.loadUser();
	});
	
});
require.config({
	baseUrl: '/js/',
    paths: {
        'jquery': 'lib/jquery.min',
        'backbone': 'lib/backbone',
        'underscore': 'lib/underscore',
        'bootstrap': 'lib/bootstrap/js/bootstrap'
    },
    shim: {
    	'bootstrap': ['jquery']
    }
});
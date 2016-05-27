require(['jquery', 'backbone', 'i18n!nls/colors', 'text!/user.html!strip', 'bootstrap', 'jquery-ui']
, function($, Backbone, colors, template) {
    console.log(colors);
    // require(['text!/user.html'], function(template) {
    // $('#user').html(template);
    // })

    $('#user').html(template);

    $("#dialog").dialog();
});
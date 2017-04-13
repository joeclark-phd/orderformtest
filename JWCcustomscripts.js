
$('.collapsible_panel_label a').each(function(){
    // toggle the little arrow icon that indicates whether a list is expanded or collapsed
    $(this).on('click',function(){$(this).parent().toggleClass('uncollapsed');});
});
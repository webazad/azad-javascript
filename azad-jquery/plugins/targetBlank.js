/**
* Target Blank jqyery plugin
*/
(function($){
    $.fn.targetBlank = function(){
        var targetArray = ['_blank','_self','_parent','_top'];
        var target = jQuery.trim($(this).attr('target'));
        
        if(target==undefined || target=='' || jQuery.inArray(target,targetArray)==false){
            $(this).attr('target','_blank');
        }
    }
})(jQuery);
/**
* Plugin call function
*/
$(document).ready(function(){
    $('.linked').targetBlank();
});
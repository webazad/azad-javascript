/* 
 * jQuery Plugin
 */
;(function($){
    $(document).ready(function(){
        $.fn.design = function(options){
            var settings = $.extend({
                color:"red",
                backgroundColor:"blue"
            },options);
            return this.css({
                color:settings.color,
                backgroundColor:settings.backgroundColor
            });
        };
    });
})(jQuery);



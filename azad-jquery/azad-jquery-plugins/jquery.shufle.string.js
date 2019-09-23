(function($){
    $.fn.shuffleString = function(options){        
        return this.each(function(){
            $(this).text(shuffleString($(this).text()));

            function shuffleString(str){
                var array = str.split("");
                for(var index=array.length-1;index>0;index--){

                }
            }
        });
    };
})(jQuery);
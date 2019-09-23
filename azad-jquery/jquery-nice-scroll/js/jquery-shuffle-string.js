;(function($){
    $(document).ready(function(){
        $.fn.shuffleString = function(){
            return this.each(function(){
                $(this).text('Updated text');
            });
        };
    });
})(jQuery);



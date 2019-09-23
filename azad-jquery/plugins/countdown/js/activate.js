(function($){
    $(document).ready(function(){
        $('#countdown').countdown({date:'21 April 2018 22:00:00'},function(){
            $('#countdown').text("We're live.");
        });
    });
})(jQuery);
;(function($){
    $(document).ready(function(){
        $('#countdown-item').appear(function(){
                $('#circle').percentcircle({
                diameter : 120,
                guage: 3,
                coverBg: '#fff',
                bgColor: '#efefef',
                fillColor: 'red',
                percentSize: '20px',
                percentWeight: '700'
            });
        });
    });
})(jQuery);
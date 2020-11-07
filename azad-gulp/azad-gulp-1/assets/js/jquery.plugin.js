/* 
 * jQuery Plugin
 */
;(function($){
    $(document).ready(function(){
        $.fn.jwSlider = function(options){
            var defaults = {
                speed : 1000,
                pause : 2000,
                transition : 'slide'
            },
            options = $.extend(defaults,options);
            this.each(function(){
                $this = $(this);
                $this.wrap('<div class="slider-wrap" />');
                if(options.pause<=options.speed)options.puase = options.speed+100;
                $this.css({
                    'width':'99999px',
                    'position':'relative',
                    'padding':0,
                    //'overflow':'hidden'
                });
                if(options.transition === 'slide'){
                    $this.children().css({
                        'float':'left',
                        'list-style':'none'
                    });
                    $('.slider-wrap').css({
                        'width':$this.children().width(),
                        'overflow':'hidden'
                    });
                    slide();
                }
                if(options.transition === 'fade'){
                    $this.children().css({
                        'width' : $this.children().width(),
                        'position':'absolute',
                        'list-style':'none',
                        'left':0
                    });
                    for(var i=$this.children().length - 1, y=0; i>=0; i--, y++){
                        //console.log('i='+i,'y='+y);
                        $this.children().eq(y).css('zIndex',i+99);
                    }
                    fade();
                }
                function fade(){
                    setInterval(function(){
                        $this.children(':first').animate({'opacity':0},options.speed,function(){
                            $this
                                    .children(':first')
                                    .css('opacity',1)
                                    .css('zIndex',$this.children(':last').css('zIndex')-1)
                                    .appendTo($this);
                        });
                    },options.pause);
                }
                function slide(){
                    setInterval(function(){
                        $this.animate({'left':'-'+$this.parent().width()},options.speed,function(){
                            $this
                                    .css('left',0)
                                    .children(':first')
                                    .appendTo($this);
                        });
                    },options.pause);
                }
            });
        };
    });
})(jQuery);
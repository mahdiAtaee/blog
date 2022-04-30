(function ($) {
    $.fn.Modal = function (userOption) {
        var option = $.extend({
            wrapperBgColor: "#000",  // color of modal bg
            wrapperOpacity: 0.8,    // opacity wrapper
            width: 500,              // width of modal in pixel
            entrance: "top",        // fade/top/bottom/right/left/leftTop
            speed: 500,              // speed animation  : ms
            top: 100,                // space from Top to Modal Box
            showEvent: "click",      // all jquery valid Event
            showCloseButton: false,
        }, userOption);

        function enterModal(box, mode) {
            var ww = $(window).width();
            var wh = $(window).height();
            var topPosition = option.top;
            var leftPosition = (ww - $(box).width()) / 2 + 'px';

            switch (mode) {
                case 'fade':
                    box.css({
                        top: topPosition,
                        left:leftPosition
                    })
                    box.fadeIn();
                    break;
                case 'top':
                default:
                    box.css({
                        top: -1 * ww,
                        left:leftPosition,
                        display:'block'
                    })
                    box.animate({
                        top:topPosition,
                        left:leftPosition
                    })
                    break;
            }
        }

        $(document).ready(function () {
            var modalButtons = $('a[data-modal],button[data-modal]');
            var wrapper = $('<div>').attr('class', 'modalWrapper').css({
                background: option.wrapperBgColor,
                opacity: option.wrapperOpacity
            });
            modalButtons.each(function () {
                var mbtn = $(this);
                var mbox = $('#' + mbtn.attr('data-modal')).css({
                    width: option.width + 'px'
                });
                $('#close-modal').click(function(e){
                    e.preventDefault();
                    mbox.fadeOut()
                    wrapper.fadeOut();
                })
                mbtn.click(function (ev) {
                    ev.preventDefault();
                    var enterMode = mbox.is('[data-entrance]') ? mbox.attr('data-entrance') : option.entrance;
                    mbtn.before(wrapper);

                    wrapper.fadeIn();

                    enterModal(mbox, enterMode)

                    wrapper.click(function(){
                        wrapper.fadeOut();
                        mbox.fadeOut();
                    })
                })

            })
        })
    }
}(jQuery));
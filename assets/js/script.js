jQuery(document).ready(function ($) {

    // image list 
    $('.img-list li').on('click', function (e) {
        if($(this).siblings().hasClass('active')){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        } else {
            $(this).addClass('active')
        }
        var x =  $('.img-list li.active img').attr('src');
        $('.display-image img').attr('src', x)
    });

    $(window).on('mousemove', function(e) {
        $('.cursor').show()
        $('.cursor').css({top: e.pageY, left: e.pageX});
       
    });
});
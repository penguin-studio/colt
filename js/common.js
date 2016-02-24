(function(){
    var mpSliderBtn = $('.go-to-down');
    mpSliderBtn.on('click', function(e){
        e.preventDefault();
        var scroll_el = $(this);
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        return false;
    });

    $(".lightSlider").lightSlider({
        item: 4,
        pager: false
    });
})();
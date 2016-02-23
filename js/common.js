(function(){
    var mpSliderBtn = $('.go-to-down');
    mpSliderBtn.click( function(e){
        e.preventDefault();
        var scroll_el = $(this);
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    $(".lightSlider").lightSlider({
        item: 4,
        pager: false
    });
})();
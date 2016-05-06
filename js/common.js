(function(){
    
    var mpSliderBtn = $('.go-to-down'),
        lightSlider = $(".lightSlider"),
        noveltySlider = $('#noveltySlider'),
        viwedSlider = $('#viwedSlider'),
        masterWorksSlider = $('.master-works'),
        serviceSlider = $('.service-slider__content');

    mpSliderBtn.on('click', function(e){
        e.preventDefault();
        var scroll_el = $(this);
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        return false;
    });

    lightSlider.lightSlider({
        item: 4,
        pager: false,
        slideMargin: 0,
        responsive :[
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]
    });

    noveltySlider.lightSlider({
        item: 3,
        controls: false
    });

    viwedSlider.lightSlider({
        item: 3,
        controls: false
    });

    masterWorksSlider.lightSlider({
        item: 5,
        pager: false,
        slideMargin: 0
    });

    serviceSlider.lightSlider({
        item: 1,
        controls: false
    });

    var toggleclass = $('.model-list li');

    toggleclass.on('click',function(){
        if( toggleclass.hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).toggleClass('active')
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });


    //Dropdown
    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }

    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    };

    $(function() {

        var dd = new DropDown( $('#dd') );

        $(document).click(function() {
            $('.wrapper-dropdown-1').removeClass('active');
        });
    });

    function DropDown_2(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }

    DropDown_2.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    };

    $(function() {

        var dd = new DropDown_2( $('#dd2') );

        $(document).click(function() {
            $('.wrapper-dropdown-2').removeClass('active');
        });
    });

    //Product del
    $('[class*=js-product-del]').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        var name = $(this).attr('class');
        var id = name[name.length - 1];
        var scrollPos = $(window).scrollTop();

        $('#product-'+id).hide(500);
    });


    $(".ajaxform").submit(function(){
            var form = $(this);
            var error = false;
            form.find('input').each( function(){
                if ($(this).val() == '') {
                    alert('Fill this "'+$(this).attr('placeholder')+'"!');
                    error = true;
                }
            });
            if (!error) {
                var data = form.serialize();
                $.ajax({
                    type: 'POST',
                    url: 'form-send.php',
                    dataType: 'json',
                    data: data,
                    beforeSend: function(data) {
                        form.find('input[type="submit"]').attr('disabled', 'disabled');
                    },
                    success: function(data){
                        if (data['error']) {
                            alert(data['error']);
                        } else {
                            alert('Letter send!');
                        }
                    },
                    complete: function(data) {
                        form.find('input[type="submit"]').prop('disabled', false);
                        alert('Ваша заявка отправлена')
                    }
                });
            }
            return false;
        });
})();
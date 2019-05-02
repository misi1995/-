window.onload = function() {
    $(function() {
        //1.轮播图的自适应布局大小显示
        function resize() {
            var windowWidth = $(window).width();
            console.log(windowWidth);
            var windowHeight = $(window).height();
            if (windowWidth > 768) {
                $(".my-slide .carousel-inner .item a img").css({ "max-width": 1920 });
                $(".my-slide .carousel-inner .item a img").css("margin-left", -(1920 - windowWidth) / 2);
            }
            if (windowWidth < 768) {
                $(".my-slide .carousel-inner .item a img").css({ "max-width": windowWidth * 2 });
                $(".my-slide .carousel-inner .item a img").css("margin-left", -(windowWidth * 2 - windowWidth) / 2);
            }
        }

        $(window).on("resize", resize).trigger("resize");

        //2.我们的成绩中数字自增
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            console.log(scrollTop);
            var dataTop = $(".our-data").offset().top;
            if (scrollTop > 200) {
                $('.counter-value').each(function() {
                    $(this).animate({
                        left: $(this).data("count")
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now).toLocaleString());
                        }
                    });
                });

                $('.counter-value1').each(function() {
                    $(this).animate({
                        left: $(this).data('percentage')
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function(now) {
                            var data = now.toFixed(1);
                            $(this).text(data + '%');
                        }
                    });
                });
            }

        })
        $(window).trigger("scroll");


        //3.我们的服务中hover事件
        $(".our-service .col-sm-3").hover(function() {
            $(this).addClass("card-active").siblings().removeClass("card-active");
        }, function() {})

        $(".return-top").click(function() {
            $("body,html").animate({ scrollTop: 0 }, 500);
        })

    })
}
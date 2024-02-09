/* $(document).ready(function(){
    $('.input_btn').mouseenter(function(){
        $('.input_box').slideLeft();
    });
}); */

/* $(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop >= 0) {
            $(".main_drk_1").addClass("on1");
        } else {
            $(".main_drk_1").removeClass("on1");
        }
    });
}); */


/* $(".start-overlay").stop(true).delay(500).fadeOut(500); */


/* 메인 애니메이션 */

$(document).ready(function(){
    AOS.init();
});


$(document).ready(function () {
    $(".main_drk_1").addClass("on1");
});

$(document).ready(function () {
    $(".main_drk_2").addClass("on2");
});

$(document).ready(function () {
    $(".main_drk_3").addClass("on3");
});
$(document).ready(function () {
    $(".main_btn").addClass("on4");
});

/* 원두 */

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 600) {
            $(".spring").addClass("in_01");
        } else {
            $(".spring").removeClass("in_01");
        }
    });
});


$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 850) {
            $(".costa").addClass("in_02");
        } else {
            $(".costa").removeClass("in_02");
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 1450) {
            $(".menu").addClass("in_03");
        } else {
            $(".menu").removeClass("in_03");
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 2200) {
            $(".magazine").addClass("in_04");
        } else {
            $(".magazine").removeClass("in_04");
        }
    });
});


$(document).ready(function () {
    $(window).on("scroll", function () {
        var sctop = $(this).scrollTop();
        console.log(sctop);
        if (sctop > 3100) {
            $(".store").addClass("in_05");
        } else {
            $(".store").removeClass("in_05");
        }
    });
});
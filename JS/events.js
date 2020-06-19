function initialize() {
    setInterval(function () {
        if ($(window).scrollTop() == 0) {
            $("nav").css('background-color', 'transparent');
            $("nav *").css('color', '#fff');
            $(".active").css('color', '#3D348B');
            $("nav span:hover").css('color', '#3D348B');
            $("nav img").attr("src", "Pics/copy2.png");
        } else {
            $("nav").css('background-color', '#fff');
            $("nav *").css('color', '#1B98E0');
            $(".active").css('color', '#3D348B');
            $("nav span:hover").css('color', '#06D6A0');
            $("nav img").attr("src", "Pics/copy.png");
        }
    }, 20)

    $(".event").click(function () {
        $(this).siblings(".overlay").show();
        $(this).siblings(".overlay").find(".exit").show();
        $(".overlay-cover").show();
        setTimeout(() => {
            $(".overlay").css("opacity", "1");
        }, 100);
        $("body").css("overflow-y", "hidden");
    })

    $(".exit").click(function () {
        $(this).hide();
        $(".overlay-cover").hide();
        $("body").css("overflow-y", "scroll");
        $(".overlay").css("opacity", "0");
        setTimeout(() => {
            $(this).parent().hide();
        }, 200);
    })
}
$(initialize);
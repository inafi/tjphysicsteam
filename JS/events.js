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
    })

    $(".exit").click(function () {
        $(this).parent().hide();
        $(this).hide();
        $(".overlay-cover").hide();
    })
}
$(initialize);
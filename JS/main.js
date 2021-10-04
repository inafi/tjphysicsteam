function initialize() {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    // Scroll bar
    // setInterval(() => {
    //     if ($(window).scrollTop() == 0) {
    //         $("body").addClass("top-flat");
    //         $("body").removeClass("bot-flat");
    //     } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    //         $("body").removeClass("top-flat");
    //         $("body").addClass("bot-flat");
    //     } else {
    //         $("body").removeClass("top-flat");
    //         $("body").removeClass("bot-flat");
    //     }
    // }, 100);

    // Footer
    $.ajax({
        url: "footer.html",
        type: "get",
        async: false,
        success: function (data) {
            $(".foot-wrap").append(data);
        }
    });

    //Navbar
    $("nav").append(`
    <div class="wrap-icon">
        <div id="nav-icon3"
            expanded="false"> <span></span> <span></span>
            <span></span> <span></span>
        </div>
    </div>
    <div class="collapse">
        <div class="navbar-nav">
            <a href="index.html">
                <span name="index">Home</span>
            </a>
            <a href="schedule.html">
                <span name="schedule">Calendar</span>
            </a>
            <a href="events.html">
                <span name="events">Events</span>
            </a>
            <a href="past.html">
                <span name="past">Past</span>
            </a>
            <a href="a.html">
                <span name="a">A Team</span>
            </a>
            <a href="b.html" name="b">
                <span name="b">B Team</span>
            </a>
            <a href="c.html">
                <span name="c">C Team</span>
            </a>
            <a href="resources.html">
                <span name="resources">Resources</span>
            </a>
        </div>
    </div>
    `);

    $("nav #nav-icon3").on("click", function (e) {
        $(this).toggleClass('open');
        if ($(this).attr("expanded") == "true") {
            $(".navbar-nav").css("opacity", "0");
            $(".navbar-nav").css("transform", "translateY(calc(-100% - 10vh))");
            $(this).attr("expanded", "false");
        } else {
            $(".navbar-nav").css("opacity", "1");
            $(".navbar-nav").css("transform", "translateY(0%)");
            $(this).attr("expanded", "true");
        }
    })

    var page = (window.location + "").split("/").slice(-1)[0].split(".")[0];
    if (page == "")
        page = "index";
    $("nav .navbar-nav span[name=" + page + "]").addClass("active");

    var nav_image = "Pics/whitepurple.png";
    var nav_active = "#3D348B"

    switch (page) {
        case "index":
        case "b":
            nav_active = "#06D6A0";
            nav_image = "Pics/whitegreen.png";
            break;
    }

    var prev = -1;
    var curr = 0;
    var top;
    setInterval(function () { 
        curr = $(window).scrollTop() + $(window).width();
        if (curr != prev) {
            top = $(window).scrollTop() == 0 && !isMobile && $(window).width() > $(window).height() * 1.4;
            if (top) {
                $("nav").css('background-color', 'transparent');
                $("nav span").css("color", "#fff");
                $("nav .active").css('color', nav_active);
                $("nav img").attr("src", nav_image);
                $("nav").css('box-shadow', 'none');
            } else {
                $("nav").css('background-color', '#fff');
                $("nav span").css("color", "#1B98E0");
                $("nav .active").css('color', '#3D348B');
                if ($("nav img").attr("src") != "Pics/bluegreen.png")
                    $("nav img").attr("src", "Pics/bluegreen.png");
                $("nav").css('box-shadow', `
                    0 2.8px 2.2px rgba(0, 0, 0, 0.014),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.018),
                    0 1.5px 2px rgba(0, 0, 0, 0.02),
                    0 2.3px 2px rgba(0, 0, 0, 0.022),
                    0 3.8px 2px rgba(0, 0, 0, 0.026),
                    0 4px 5px rgba(0, 0, 0, 0.05)`);

                if ($("nav #nav-icon3").attr("expanded") == "true") {
                    $("nav #nav-icon3").click();
                }
            }
        }
        prev = curr;
    }, 50)

    $(document).on('mouseenter', 'nav span', function () {
        if (top)
            $(this).css("color", nav_active);
        else
            $(this).css("color", "#3D348B");
    }).on('mouseleave', 'nav span', function () {
        if (top) {
            if (!$(this).hasClass("active"))
                $(this).css("color", "#fff");
        } else {
            if (!$(this).hasClass("active"))
                $(this).css("color", "#1B98E0");
        }
    });

    //Mobile
    var disable_click_flag = false;

    $(window).scroll(function () {
        disable_click_flag = true;
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            disable_click_flag = false;
        }, 250));
    });

    $("body").on("click", "a", function (e) {
        if (disable_click_flag) {
            e.preventDefault();
        }
    });
}
$(initialize);
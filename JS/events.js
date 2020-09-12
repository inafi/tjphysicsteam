function initialize() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    var prev = -1;
    var curr = 0;
    setInterval(function () {
        curr = $(window).scrollTop() + $(window).width();
        if (curr != prev) {
            if ($(window).scrollTop() == 0 && !isMobile && $(window).width() > 1170) {
                $("nav").css('background-color', 'transparent');
                $("nav *").css('color', '#fff');
                $(".active").css('color', '#3D348B');
                $("nav span:hover").css('color', '#3D348B');
                $("nav img").attr("src", "Pics/copy2.png");
                $("nav").css('box-shadow', 'none');
            } else {
                $("nav").css('background-color', '#fff');
                $("nav *").css('color', '#1B98E0');
                $(".active").css('color', '#3D348B');
                $("nav span:hover").css('color', '#06D6A0');
                $("nav img").attr("src", "Pics/copy.png");
                $("nav").css('box-shadow', `
                0 2.8px 2.2px rgba(0, 0, 0, 0.014),
                0 6.7px 5.3px rgba(0, 0, 0, 0.018),
                0 1.5px 2px rgba(0, 0, 0, 0.02),
                0 2.3px 2px rgba(0, 0, 0, 0.022),
                0 3.8px 2px rgba(0, 0, 0, 0.026),
                0 4px 5px rgba(0, 0, 0, 0.05)`);
            }
        }
        prev = curr;
    }, 50)

    $(".event, .large").click(function () {
        if ($(this).parent().attr("href") == null) {
            $(this).parent().parent().find(".overlay").show();
            try {
                var link = $(this).parent().parent().find(".vid").attr("name");
                $(this).parent().parent().find(".vid").attr("src", link);
            } catch (error) {
            }
            $(".overlay-cover").show();
            setTimeout(() => {
                $(".overlay").css("opacity", "1");
            }, 100);
            $("html, body").css("overflow-y", "hidden");
            $('html, body').on('scroll touchmove mousewheel', function (e) {
                if ($(".overlay").css("opacity") == "1") {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            })
        }
    })

    $(".overlay-cover").on("mousedown touchend", function (e) {
        $(".overlay-cover").hide();
        $(".overlay").each(function () {
            if ($(this).css("display") != "none")
                $(this).find(".vid").attr("src", "");
        })
        $("html, body").css("overflow-y", "auto");
        $(".overlay").css("opacity", "0");
        setTimeout(() => {
            $(".overlay").hide();
        }, 200);
        e.preventDefault();
    })

    try {
        var ds = new DragSelect({
            selectables: document.querySelectorAll('p'),
            area: document.querySelector('body')
        });

        $('body').on('mousedown', 'p', function (event) {
            ds.removeSelection($(this).get(0));
        });
    } catch (error) {

    }

    var css = `
        @media only screen and (orientation:portrait) {
            .overlay .title {
                font-size: 4vh;
            }

            .event-small,
            .event-large {
                justify-content: center;
                padding-left: 0%;
                padding-right: 0%;
            }

            .event-large>div {
                padding-left: 8%;
                padding-right: 8%;
            }

            .event-small>div {
                padding-left: 8%;
                padding-right: 8%;
            }
        
            .large,
            .event {
                min-width: 0vh;
            }
        
            .overlay {
                height: 75vh;
            }

            .vid {
                height: 60vw;
            }

            .slides {
                height: 60vw;
            }
        }
        
        @media only screen and (orientation:landscape) {
            .overlay {
                height: 75vh;
                width: 80%;
            }
        }
    `

    if (isMobile) {
        $("head").append('<style>' + css + '</style>');
    }
}
$(initialize);
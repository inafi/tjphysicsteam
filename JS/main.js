function initialize() {
    $.ajax({
        url: "footer.html",
        type: "get",
        async: false,
        success: function (data) {
            $(".foot-wrap").append(data);
            $.ajax({
                url: "form.html",
                type: "get",
                async: false,
                success: function (data) {
                    $(".form-overlay").append(data);
                }
            });
        }
    });

    $("nav").append(' <i class="navbar-toggler far fa-chevron-down" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> </i> <div class="collapse" id="navbarNavAltMarkup"> <div class="anim"> <div class="navbar-nav"> <a href="index.html"><span>Home</span></a> <a href="schedule.html"><span>Calendar</span></a> <a href="events.html"><span>Events</span></a> <a href="rankings.html"><span>Rankings</span></a> <a href="a.html"><span>A Team</span></a> <a href="b.html"><span>B Team</span></a> <a href="c.html"><span>C Team</span></a> <a href="past.html"><span>Past</span></a> <a href="resources.html"><span>Resources</span></a> </div></div></div>');

    $("nav i").click(function () {
        if ($(this).attr("aria-expanded") == "true") {
            $(this).css("transform", "rotateZ(0deg)");
            $(".navbar-nav").css("opacity", "0");
            $(".navbar-nav").css("transform", "translateY(calc(-100% - 10vh))");
        } else {
            $(this).css("transform", "rotateZ(180deg)");
            $(".navbar-nav").css("opacity", "1");
            $(".navbar-nav").css("transform", "translateY(0%)");
        }
    })

    $(".form-link").click(function () {
        $(".form-overlay").show();
        $(".form-exit").show();
        $(".form-overlay-cover").show();
        setTimeout(() => {
            $(".form-overlay").css("opacity", "1");
        }, 10);
        $("body").css("overflow-y", "hidden");
    })

    $(".form-exit, .form-overlay-cover").on("mousedown click", function () {
        $(".form-exit").hide();
        $(".form-overlay-cover").hide();
        $("body").css("overflow-y", "scroll");
        $(".form-overlay").css("opacity", "0");
        setTimeout(() => {
            $(".form-overlay").hide();
        }, 200);
    })

    $("body").on("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var on = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (on) {
            $("form .send").prop('disabled', false);
        } else {
            $("form .send").prop('disabled', true);
        }
    });

    var dstext = "";
    setInterval(() => {
        dstext = ""
        $(".ds-selected").each(function () {
            dstext += " " + $(this).text();
        })
        $("#clipboard").html(dstext);
    }, 20);

    $("body").bind('copy', function () {
        var curr = window.getSelection().toString() == "";
        if (curr && dstext != "") {
            var text = $("#clipboard").get(0)
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    });

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    var css = `
    html {
        overflow-x: hidden;
    } 
    `

    if (isMobile){
        $("head").append('<style>' + css + '</style>');
    }

    $('.navbar-toggler:not').on('touchstart', function () {
        console.log($(this));
        $(this)[0].click();
    });
}
$(initialize);
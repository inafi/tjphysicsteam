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
    
    $("nav").append(' <i class="navbar-toggler fa fa-chevron-down" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> </i> <div class="collapse" id="navbarNavAltMarkup"> <div class="anim"> <div class="navbar-nav"> <a href="index.html"><span>Home</span></a> <a href="schedule.html"><span>Schedule</span></a> <a href="events.html"><span>Events</span></a> <a href="rankings.html"><span>Rankings</span></a> <a href="a.html"><span>A Team</span></a> <a href="b.html"><span>B Team</span></a> <a href="c.html"><span>C Team</span></a> <a href="past.html"><span>Past</span></a> <a href="resources.html"><span>Resources</span></a> </div></div></div>');

    $("nav i").click(function () {
        if ($(this).attr("aria-expanded") == "true") {
            $(this).css("transform", "rotateZ(0deg)");
            $(".navbar-nav").css("opacity", "0");
        } else {
            $(this).css("transform", "rotateZ(180deg)");
            $(".navbar-nav").css("opacity", "1");
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

    $(".form-exit, .form-overlay-cover").on("mousedown",function () {
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
}
$(initialize);
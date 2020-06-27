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

    $(".form-exit").click(function () {
        $(this).hide();
        $(".form-overlay-cover").hide();
        $("body").css("overflow-y", "scroll");
        $(".form-overlay").css("opacity", "0");
        setTimeout(() => {
            $(this).parent().hide();
        }, 200);
    })

    function selectText(element) {
        if (/INPUT|TEXTAREA/i.test(element.tagName)) {
            element.focus();
            if (element.setSelectionRange) {
                element.setSelectionRange(0, element.value.length);
            } else {
                element.select();
            }
            return;
        }

        if (window.getSelection) { // All browsers, except IE <=8
            window.getSelection().selectAllChildren(element);
        } else if (document.body.createTextRange) { // IE <=8
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        }
    }

    // selectText(document.querySelector('body'));

    $("body").on("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var on = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (on) {
            $("form .send").prop('disabled', false);
        } else {
            $("form .send").prop('disabled', true);
        }
        $(".ds-selected").each(function () {
            // selectText(document.querySelector('body'));
        })
    });

    document.body.addEventListener("mouseup", function () {
        var curr = window.getSelection().toString() == "";
        var dstext = "";
        $(".ds-selected").each(function () {
            dstext += " " + $(this).text();
        })
        $("#clipboard").text(dstext);
        if (curr && dstext != "") {
            var text = $("#clipboard").get(0)
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }, false);

}
$(initialize);
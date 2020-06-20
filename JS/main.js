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

    $("body").on("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var on = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        console.log(on);
        if (on) {
            $("form .send").prop('disabled', false);
        } else {
            $("form .send").prop('disabled', true);
        }
    })
}
$(initialize);
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

    $(".fc-today-button").text("Today");
    $("body").on("click", function () {
        $(".fc-today-button").text("Today");
    })

    var date = new Date();
    $(".side .title").text($(".fc-left h2").text().split(" ")[0] + ' ' + date.getDate());

    var ds = new DragSelect({
        selectables: document.querySelectorAll('div.side p'),
        area: document.querySelector('body'), 
        callback: e => console.log(e)
    });

    $('body').on('mousedown', 'p', function(event) {
        ds.removeSelection($(this).get(0));
    });
}
$(initialize);
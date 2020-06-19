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


    $(document).on('mouseenter', '.pdf', function (event) {
        var newwidth = Math.max($(this).children(".label").get(0).scrollWidth, $(window).width() * .2);
        var off = $(this).children(".label").get(0).offsetWidth;
        var scroll = $(this).children(".label").get(0).scrollWidth;
        if (off < scroll) {
            $(this).css("width", newwidth + "px");
            $(this).children(".label").css("width", newwidth + "px");
        }
    }).on('mouseleave', '.pdf', function () {
        $(this).css("width", "20%");
        $(this).css("margin-left", "0vh");
        $(this).css("margin-right", "3%");
        $(this).children(".label").css("width", "20%");
        $(this).children(".label").css("margin-left", "0px");
    });

    var nump;
    var viewp = 78;
    var currp = 0;

    fetch('Lectures/PPP/dir.txt')
        .then(response => response.text())
        .then(text => {
            text = text.split("\n");
            nump = text.length;
            $(".pdf-move").html("");
            var fold = $(this).attr("name");
            var append = '';
            for (i = 0; i < text.length; i++) {
                var name = text[i].split(".pdf")[0];
                dir = 'Lectures/PPP/' + text[i];
                append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                append += '</p></div></a>';
            }
            $(".pdf-move").append(append);
        })


    function moveLeftPdf() {
        currp += 23;
        viewp -= 23;
        $(".pdf-move").css("transform", "translateX(" + currp + "%)");
    };

    function moveRightPdf() {
        currp -= 23;
        viewp += 23;
        $(".pdf-move").css("transform", "translateX(" + currp + "%)");
    };

    $('.fa-chevron-left.pa').click(function () {
        if (viewp > 78)
            moveLeftPdf();
        console.log(viewp, nump * 23, nump)
    });

    $('.fa-chevron-right.pa').click(function () {
        if (viewp + 23 < nump * 23)
            moveRightPdf();
        console.log(viewp, nump * 23, nump)
    });
}
$(initialize);
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

    var nump;
    var viewp = 78;
    var currp = 0;

    fetch('Lectures/PPP/dir.txt')
        .then(response => response.text())
        .then(text => {
            console.log(text.split("\n"))
            text = text.split("\n");
            nupm = text.length;
            nump = 0;
            $(".pdf-move").html("");
            viewp = 78;
            currp = 0;
            $(".pdf-move").css("transform", "translateX(" + currp + "%)");
            var fold = $(this).attr("name");
            var append = '';
            for (i = 0; i < text.length; i++) {
                var name = text[i].split(".pdf")[0];
                dir = 'Lectures/PPP/' + text[i];
                append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                append += '</p></div></a>';
                console.log(dir);
            }
            $(".pdf-move").append(append);
        })


    function moveLeftPdf() {
        currp += 23;
        viewp -= 23;
        console.log(viewp);
        $(".pdf-move").css("transform", "translateX(" + currp + "%)");
    };

    function moveRightPdf() {
        currp -= 23;
        viewp += 23;
        console.log(viewp);
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
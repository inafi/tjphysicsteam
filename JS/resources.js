function initialize() {
    var ds = new DragSelect({
        selectables: document.querySelectorAll('.topic p, .pdf p, p.title, .exam-resource p'),
        area: document.querySelector('body')
    });

    $('body').on('mousedown', 'p', function (event) {
        ds.removeSelection($(this).get(0));
    });

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

        ds.addSelectables(document.querySelectorAll('.pdf p'));
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

    var numpt;
    var viewpt = 78;
    var currpt = 0;
    var previnfo = "";

    $(".topic").click(function () {
        if ($(".viewer").attr("vis") == "off" || previnfo != $(this).attr("name")) {
            $(".viewer").css("height", "38vh");
            $(".viewer").css("margin-bottom", "6vh");
            $(".fa-chevron-left.pa").css("display", "unset");
            $(".fa-chevron-right.pa").css("display", "unset");
            fetch('Lectures/Tests/dir.txt')
                .then(response => response.text())
                .then(text => {
                    text = text.split("\n");
                    numpt = 0;
                    $(".pdf-move").html("");
                    viewpt = 78;
                    currpt = 0;
                    $(".pdf-move").css("transform", "translateX(" + currpt + "%)");
                    var fold = $(this).attr("name");
                    var append = '';
                    for (i = 0; i < text.length; i++) {
                        if (text[i].split("/")[0] == fold) {
                            var name = text[i].split("/")[1].split(".pdf")[0];
                            dir = 'Lectures/Tests/' + text[i];
                            append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                            append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                            append += '</p></div></a>';
                            numpt += 1;
                        }
                    }
                    $(".pdf-move").append(append);
                })
            $(".viewer").attr("vis", "on");
        } else if (previnfo != "" && previnfo == $(this).attr("name")) {
            $(".viewer").css("height", "0vh");
            $(".viewer").css("margin-bottom", "0vh");
            $(".fa-chevron-left.pa").css("display", "none");
            $(".fa-chevron-right.pa").css("display", "none");
            $(".viewer").attr("vis", "off");
        }
        previnfo = $(this).attr("name");
    });

    function moveLeftPdfT() {
        currpt += 23;
        viewpt -= 23;
        $("#tests .pdf-move").css("transform", "translateX(" + currpt + "%)");
    };

    function moveRightPdfT() {
        currpt -= 23;
        viewpt += 23;
        $("#tests .pdf-move").css("transform", "translateX(" + currpt + "%)");
    };

    $('#tests .fa-chevron-left.pa').click(function () {
        if (viewpt > 78)
            moveLeftPdfT();
        console.log(viewpt, numpt * 23, numpt)
    });

    $('#tests .fa-chevron-right.pa').click(function () {
        if (viewpt + 23 < numpt * 23)
            moveRightPdfT();
        console.log(viewpt, numpt * 23, numpt)
    });

    var nump;
    var viewp = 78;
    var currp = 0;

    fetch('Lectures/Practice/dir.txt')
        .then(response => response.text())
        .then(text => {
            text = text.split("\n");
            nump = 0;
            $("#sets .pdf-move").html("");
            viewp = 78;
            currp = 0;
            $("#sets .pdf-move").css("transform", "translateX(" + currp + "%)");
            var fold = "Problems";
            var append = '';
            for (i = 0; i < text.length; i++) {
                if (text[i].split("/")[0] == fold) {
                    var name = text[i].split("/")[1].split(".pdf")[0];
                    dir = 'Lectures/Practice/' + text[i];
                    append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                    append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                    append += '</p></div></a>';
                    nump += 1;
                }
            }
            $("#sets .pdf-move").append(append);
        })

    $(".toggle-center p").click(function () {
        if ($(this).attr("val") == "off") {
            if ($(this).text() == "Solutions") {
                $(".toggle-move").css("transform", "translateX(100%)");
                $(".toggle-move").css("border-top-left-radius", "0");
                $(".toggle-move").css("border-bottom-left-radius", "0");
                $(".toggle-move").css("border-top-right-radius", "1vh");
                $(".toggle-move").css("border-bottom-right-radius", "1vh");
                $(".toggle-wrap>:nth-child(2)").css("color", "#1B98E0");
                $(".toggle-wrap>:last-child").css("color", "#fff");
                $(this).siblings("p").attr("val", "off");
                $(this).attr("val", "on");
            } else {
                $(".toggle-move").css("transform", "translateX(0%)");
                $(".toggle-move").css("border-top-left-radius", "1vh");
                $(".toggle-move").css("border-bottom-left-radius", "1vh");
                $(".toggle-move").css("border-top-right-radius", "0");
                $(".toggle-move").css("border-bottom-right-radius", "0");
                $(".toggle-wrap>:nth-child(2)").css("color", "#fff");
                $(".toggle-wrap>:last-child").css("color", "#1B98E0");
                $(this).siblings("p").attr("val", "off");
                $(this).attr("val", "on");
            }
        }

        fetch('Lectures/Practice/dir.txt')
            .then(response => response.text())
            .then(text => {
                text = text.split("\n");
                nump = 0;
                $("#sets .pdf-move").html("");
                viewp = 78;
                currp = 0;
                $("#sets .pdf-move").css("transform", "translateX(" + currp + "%)");
                var fold = $(this).text();
                var append = '';
                for (i = 0; i < text.length; i++) {
                    if (text[i].split("/")[0] == fold) {
                        var name = text[i].split("/")[1].split(".pdf")[0];
                        dir = 'Lectures/Practice/' + text[i];
                        append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                        append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                        append += '</p></div></a>';
                        nump += 1;
                    }
                }
                $("#sets .pdf-move").append(append);
            })
    })

    function moveLeftPdf() {
        currp += 23;
        viewp -= 23;
        $("#sets .pdf-move").css("transform", "translateX(" + currp + "%)");
    };

    function moveRightPdf() {
        currp -= 23;
        viewp += 23;
        $("#sets .pdf-move").css("transform", "translateX(" + currp + "%)");
    };

    $('#sets .fa-chevron-left.pa').click(function () {
        if (viewp > 78)
            moveLeftPdf();
        console.log(viewp, nump * 23, nump)
    });

    $('#sets .fa-chevron-right.pa').click(function () {
        if (viewp + 23 < nump * 23)
            moveRightPdf();
        console.log(viewp, nump * 23, nump)
    });
}
$(initialize);
function initialize() {
    var ds = new DragSelect({
        selectables: document.querySelectorAll('div.event p, .topic p, .pdf p, p.title'),
        area: document.querySelector('body')
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

    var req = "https://sheets.googleapis.com/v4/spreadsheets/1-JfkEnNY_z5T_oKnxL70sVwqe-ZKnuOmXHwDXnh0f9g/?key=AIzaSyAjX2wnpSdfn5KkEvaTwXMkTqCXxRRIxm8&includeGridData=true";
    var num;
    //This is for adjusting the calendar slider at the top
    //Just use a date object and get the UTC month
    var month = 9;
    var save;

    $.ajax({
        url: req,
        type: "get",
        async: false,
        success: function (data) {
            var arr = data.sheets[3].data[0].rowData;
            num = arr.length;
            // console.log(arr);
            // console.log(num);
            for (i = 0; i < arr.length; i++) {
                var date = "";
                var title = "";
                var desc = "";
                var link = "";
                try {
                    date = arr[i].values[0].formattedValue;
                    title = arr[i].values[1].formattedValue;
                    desc = arr[i].values[2].formattedValue;
                    link = arr[i].values[3].formattedValue;
                } catch (err) {

                }
                try {
                    console.log(date, title, desc, link);
                    if (parseInt(date.split("/")[0]) == month && save == null)
                        save = i;
                    var href = "";
                    if (link != "")
                        href = ' href="' + link + '"';
                    var append = '<a' + href + ' target="_blank"><div class="event"><p class="label">';
                    append += date + '</p>';
                    append += '<p class="desc">' + 'Lecture on ' + title + "</p></div></a>";
                    $(".event-wrap").append(append);
                } catch (err) {
                    num -= 1;
                }
            }
            ds.addSelectables(document.querySelectorAll('div.event p'));
        }
    });

    var total = num * 15;
    var view = 94;
    var curr = save * -15;

    view += save * 15;
    $(".event-wrap").css("transform", "translateX(" + save * -15 + "%)");

    function moveLeft() {
        curr += 15;
        view -= 15;
        $(".event-wrap").css("transform", "translateX(" + curr + "%)");
    };

    function moveRight() {
        curr -= 15;
        view += 15;
        $(".event-wrap").css("transform", "translateX(" + curr + "%)");
    };

    $('.fa-chevron-left.sa').click(function () {
        if (view > 94)
            moveLeft();
    });

    $('.fa-chevron-right.sa').click(function () {
        if (view < total)
            moveRight();
    });

    var nump;
    var viewp = 78;
    var currp = 0;
    var previnfo = "";

    $(".topic").click(function () {
        if ($(".viewer").attr("vis") == "off" || previnfo != $(this).attr("name")) {
            $(".viewer").css("height", "38vh");
            $(".viewer").css("margin-bottom", "6vh");
            $(".fa-chevron-left.pa").css("display", "unset");
            $(".fa-chevron-right.pa").css("display", "unset");
            fetch('Lectures/C/dir.txt')
                .then(response => response.text())
                .then(text => {
                    text = text.split("\n");
                    nump = 0;
                    $(".pdf-move").html("");
                    viewp = 78;
                    currp = 0;
                    $(".pdf-move").css("transform", "translateX(" + currp + "%)");
                    var fold = $(this).attr("name");
                    var append = '';
                    for (i = 0; i < text.length; i++) {
                        if (text[i].split("/")[0] == fold) {
                            var name = text[i].split("/")[1].split(".pdf")[0];
                            dir = 'Lectures/C/' + text[i];
                            append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                            append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                            append += '</p></div></a>';
                            nump += 1;
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
    });

    $('.fa-chevron-right.pa').click(function () {
        if (viewp + 23 < nump * 23)
            moveRightPdf();
    });
}
$(initialize);
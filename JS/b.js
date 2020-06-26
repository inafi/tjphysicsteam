function initialize() {
    var ds = new DragSelect({
        selectables: document.querySelectorAll('div.event p, p, .pdf'),
        callback: e => console.log(e)
    });

    setInterval(function () {
        if ($(window).scrollTop() == 0) {
            $("nav").css('background-color', 'transparent');
            $("nav *").css('color', '#fff');
            $(".active").css('color', '#06D6A0');
            $("nav span:hover").css('color', '#3D348B');
            $("nav img").attr("src", "Pics/copy2.png");
        } else {
            $("nav").css('background-color', '#fff');
            $("nav *").css('color', '#1B98E0');
            $(".active").css('color', '#3D348B');
            $("nav span:hover").css('color', '#06D6A0');
            $("nav img").attr("src", "Pics/copy.png");
        }
        
        ds.setSelectables(document.querySelectorAll('div.event p, .pdf p'));
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

    var req = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQceVGvkhRKu73a7grDmOPnr0kQ1hBomcButE_ERqf4BlhbuJ1LLYWzZOFVKBo0wsVz4bupKXtlMk1A/pub?gid=626361445&single=true&output=csv";
    var num;
    var month = 9;
    var save;

    $.ajax({
        url: req,
        type: "get",
        async: false,
        success: function (data) {
            console.log(data);
            var arr = Papa.parse(data).data;
            num = arr.length;
            for (i = 0; i < arr.length; i++) {
                if (parseInt(arr[i][0].split("/")[0]) == month && save == null)
                    save = i;
                var append = '<a href="' + arr[i][3] + '" target="_blank"><div class="event"><p class="label">';
                append += arr[i][0] + '</p>';
                append += '<p class="desc">' + 'Lecture on ' + arr[i][1] + "</p></div></a>";
                $(".event-wrap").append(append);
            }
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
            fetch('Lectures/B/dir.txt')
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
                            dir = 'Lectures/B/' + text[i];
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
function initialize() {
    //Gets which team user is is viewing
    var page = [window.location.href.split("/").pop().split(".")[0].toUpperCase()];
    page.push("ABC".indexOf(page[0]) + 1)

    //Mobile
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    //div width
    $(document).on('mouseenter', '.event', function (event) {
        var newwidth = Math.max($(this).children(".desc")[0].scrollWidth + $(".event").width() * .2, $(".event").width());
        var off = $(this).children(".desc")[0].offsetWidth;
        var scroll = $(this).children(".desc")[0].scrollWidth;
        if (off < scroll) {
            $(this).css("width", newwidth + "px");
        }
    }).on('mouseleave', '.event', function () {
        $(this).css("width", "13%");
        $(this).css("margin-left", "0vh");
        $(this).css("margin-right", "2%");
    });

    $(document).on('mouseenter', '#lectures .pdf', function (event) {
        var newwidth = Math.max($(this).children(".label")[0].scrollWidth, $(window).width() * .2);
        var off = $(this).children(".label")[0].offsetWidth;
        var scroll = $(this).children(".label")[0].scrollWidth;
        if (off < scroll) {
            $(this).css("width", newwidth + "px");
            $(this).children(".label").css("width", newwidth + "px");
        }
    }).on('mouseleave', '#lectures .pdf', function () {
        $(this).css("width", "20%");
        $(this).css("margin-left", "0vh");
        $(this).css("margin-right", "3%");
        $(this).children(".label").css("width", "20%");
        $(this).children(".label").css("margin-left", "0px");
    });

    $(document).on('mouseenter', '#8th .pdf', function (event) {
        var newwidth = $(this).children(".label")[0].scrollWidth;
        var off = $(this).children(".label")[0].offsetWidth;
        var scroll = $(this).children(".label")[0].scrollWidth;
        $(this).width($(this).width());
        if (off < scroll) {
            $(this).width(newwidth + "px");
            $(this).children(".label").width(newwidth + "px");
            // $(this).find("img").width(newwidth + "px");
        }
        console.log("on")
    }).on('mouseleave', '#8th .pdf', function () {
        console.log("leave", $(this).width(), $(this).find(".img-wrap").width(), $(this).find("img").width())
        $(this).width($(this).find("img").innerWidth());
        $(this).children(".label").width("100%");
        // $(this).find("img").width("100%");
        setTimeout(() => {
            $(this).css("width", "auto");
        }, 300);
    });

    //Events
    function isVisible(elem) {
        if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
        const style = getComputedStyle(elem);
        if (style.display === 'none') return false;
        if (style.visibility !== 'visible') return false;
        if (style.opacity < 0.1) return false;
        if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
            elem.getBoundingClientRect().width === 0) {
            return false;
        }
        const elemCenter = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };
        if (elemCenter.x < 0) return false;
        if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
        if (elemCenter.y < 0) return false;
        if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
        let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
        do {
            if (pointContainer === elem) return true;
        } while (pointContainer = pointContainer.parentNode);
        return false;
    }

    var req = "https://sheets.googleapis.com/v4/spreadsheets/1-JfkEnNY_z5T_oKnxL70sVwqe-ZKnuOmXHwDXnh0f9g/?key=AIzaSyAjX2wnpSdfn5KkEvaTwXMkTqCXxRRIxm8&includeGridData=true";
    var TodayDate = new Date();
    var month = TodayDate.getMonth() + 1;
    var save; //Used to save index of month in the get array

    var size = $(".event").width() + .02 * $(window).width();
    var currc;

    $.ajax({
        url: req,
        type: "get",
        success: function (data) {
            var arr = data.sheets[page[1]].data[0].rowData;
            num = arr.length;
            for (i = 1; i < arr.length; i++) {
                var date = "";
                var title = "";
                var desc = "";
                var link = "";
                try {
                    date = arr[i].values[0].formattedValue;
                    title = arr[i].values[1].formattedValue;
                    desc = arr[i].values[2].formattedValue;
                    link = arr[i].values[3].formattedValue;
                } catch (err) {}
                if (title == null)
                    title = "";
                if (link == null)
                    link = "";
                if (desc == null)
                    link = "";
                try {
                    if (parseInt(date.split("/")[0]) == month && save == null)
                        save = i - 2;
                    var href = "";
                    if (link != "")
                        href = ' href="' + link + '"';
                    var append = '<a' + href + ' target="_blank"><div class="event"><p class="label">';
                    append += date + '</p>';
                    append += '<p class="desc">' + title + "</p></div></a>";
                    $(".event-wrap").append(append);
                } catch (err) {
                    num -= 1;
                }
            }
            size = $(".event").width() + .02 * $(window).width();
            if (save == null) {
                currc = -1 * size;
            } else {
                currc = save * -1 * size;
            }

            if (!isMobile) {
                $(".event-wrap").css("transform", "translateX(" + save * -1 * size + "px)");
            } else {
                var lscroll = parseInt($(".event-wrap a:eq(" + save + ")").offset().left);
                if (save != 0)
                    $(".schedule").scrollLeft(lscroll);
            }

            $(".slider").height("9vh");
            $(".lectures").css("margin-top", "4vh");
        }
    });

    function moveLeft() {
        currc += size;
        $(".event-wrap").css("transform", "translateX(" + currc + "px)");
    };

    function moveRight() {
        currc -= size;
        $(".event-wrap").css("transform", "translateX(" + currc + "px)");
    };

    $('.fa-chevron-left.sa').click(function () {
        if (!isVisible($(".event-wrap > :first-child")[0]))
            moveLeft();
    });

    $('.fa-chevron-right.sa').click(function () {
        if (!isVisible($(".event-wrap > :last-child")[0]))
            moveRight();
    });

    $(window).on('resize', function () {
        size = $(".event").width() + .02 * $(window).width();
        currc = 0;
        $(".event-wrap").css("transform", "translateX(0%)");
    });

    //PDF Viewer
    var sizep = $("#lectures .pdf-move a").width();
    var nump;
    var index = 0;
    var currp = 0;
    var viewp = parseInt($(".pdf-wrap").width());
    var previnfo = "";

    $(".topic").on("click", function (e) {
        if ($("#lectures").attr("vis") == "off" || previnfo != $(this).attr("name")) {
            $("#lectures").css("height", "38vh");
            $("#lectures").css("margin-bottom", "6vh");
            $(".topic").css("color", "#1B98E0");
            $(this).css("color", "#3D348B");
            $(".topic i").removeClass("fa-folder-open");
            $(".topic i").addClass("fa-folder");
            $(this).children("i").removeClass("fa-folder");
            $(this).children("i").addClass("fa-folder-open");
            fetch('Lectures/' + page[0] + '/dir.txt')
                .then(response => response.text())
                .then(text => {
                    text = text.split("\n");
                    nump = 0;
                    $("#lectures .pdf-move").html("");
                    viewp = parseInt($(".pdf-wrap").width());
                    currp = 0;
                    index = 0;
                    $("#lectures .pdf-move").css("transform", "translateX(" + currp + "%)");
                    var fold = $(this).attr("name");
                    var append = '';
                    for (i = 0; i < text.length; i++) {
                        if (text[i].split("/")[0] == fold) {
                            var name = text[i].split("/")[1].split(".pdf")[0];
                            dir = 'Lectures/' + page[0] + '/' + text[i];
                            append += '<a href="' + dir + '" target="_blank"><div class="pdf"><img src="';
                            append += dir.replace(/.pdf/g, '.png') + '"><p class="label">' + name.replace(/_/g, ' ');
                            append += '</p></div></a>';
                            nump += 1;
                        }
                    }
                    $("#lectures .pdf-move").append(append);
                })
            $("#lectures").attr("vis", "on");
        } else if (previnfo != "" && previnfo == $(this).attr("name")) {
            $(".topic").css("color", "#1B98E0");
            $(".topic i").removeClass("fa-folder-open");
            $(".topic i").addClass("fa-folder");
            $("#lectures").css("height", "0vh");
            $("#lectures").css("margin-bottom", "0vh");
            $("#lectures").attr("vis", "off");
        }
        previnfo = $(this).attr("name");
    });

    function moveLeftPdf() {
        currp += sizep;
        index -= 1;
        $("#lectures .pdf-move").css("transform", "translateX(" + currp + "px)");
    };

    function moveRightPdf() {
        currp -= sizep;
        index += 1;
        $("#lectures .pdf-move").css("transform", "translateX(" + currp + "px)");
    };

    $('#lectures .fa-chevron-left.pa').click(function () {
        sizep = $("#lectures .pdf-move a").width();
        viewp = parseInt($(".pdf-wrap").width());
        if (viewp + sizep * index > $("#lectures .pdf-wrap").width())
            moveLeftPdf();
    });

    $('#lectures .fa-chevron-right.pa').click(function () {
        sizep = $("#lectures .pdf-move a").width();
        viewp = parseInt($(".pdf-wrap").width());
        if (viewp + sizep * index < nump * sizep - $(window).width() * .03)
            moveRightPdf();
    });

    $(window).on('resize', function () {
        sizep = $("#lectures .pdf-move a").width();
        viewp = parseInt($(".pdf-wrap").width());
        currp = 0;
        index = 0;
        $("#lectures .pdf-move").css("transform", "translateX(0%)");
    });

    $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1szjHffWEWHrcXE1XLEMKnzbOfAAAufuaSkYiuJN9YLA/?key=AIzaSyAjX2wnpSdfn5KkEvaTwXMkTqCXxRRIxm8&includeGridData=true",
        type: "get",
        success: function (data) {
            pdfviewer("#8th", [page[1] - 1]);

            function pdfviewer(id, index) {
                var sizepl = parseInt($("#8th .pdf").width() + $(window).width() * .03);
                var numpl;
                var viewpl = parseInt($(id + " .pdf-wrap").width());
                var currpl = 0;
                var indexl = 0;
                var slides = [];
                var youtube = [];
                var docs = [];

                for (k = 0; k < index.length; k++) {
                    var arr = data.sheets[index[k]].data[0].rowData;
                    for (i = 1; i < arr.length; i++) {
                        try {
                            if (arr[i].values[0].formattedValue != null)
                                slides.push([arr[i].values[0].formattedValue, arr[i].values[1].formattedValue]);
                        } catch (error) {}
                        try {
                            if (arr[i].values[2].formattedValue != null)
                                youtube.push([arr[i].values[2].formattedValue, arr[i].values[3].formattedValue]);
                        } catch (error) {}
                        try {
                            if (arr[i].values[4].formattedValue != null)
                                docs.push([arr[i].values[4].formattedValue, arr[i].values[5].formattedValue]);
                        } catch (error) {}
                    }
                }

                if (page[0] == "A")
                    update(1);
                else
                    update(0);

                function youtube_parser(url) {
                    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                    var match = url.match(regExp);
                    return (match && match[7].length == 11) ? match[7] : false;
                }

                function update(view) {
                    $(id + " .pdf-move").html("");
                    viewpl = parseInt($(id + " .pdf-wrap").width());
                    currpl = 0;
                    indexl = 0;
                    $(id + " .pdf-move").css("transform", "translateX(" + currpl + "%)");
                    var append = '';
                    var arr;
                    var pick;

                    $(id + " .switch").removeClass("active-switch");
                    if (view == 0) {
                        arr = slides;
                        numpl = arr.length;
                        pick = "slides";
                        $(id + " #slides").addClass("active-switch");
                    }
                    if (view == 1) {
                        arr = youtube;
                        numpl = arr.length;
                        pick = "youtube";
                        $(id + " #youtube").addClass("active-switch");
                    }
                    if (view == 2) {
                        arr = docs;
                        numpl = arr.length;
                        pick = "docs";
                        $(id + " #docs").addClass("active-switch");
                    }

                    for (i = numpl - 1; i > -1; i--) {
                        var pic;
                        if (view == 0) {
                            pic = slides[i][1].split("/d/")[1].split("/")[0]
                            pic = "https://lh3.googleusercontent.com/d/" + pic + "=w640"
                        }
                        if (view == 1) {
                            pic = youtube_parser(youtube[i][1]);
                            pic = "https://img.youtube.com/vi/" + pic + "/sddefault.jpg";
                        }
                        if (view == 2) {
                            temp = docs[i][1].split(".")
                            temp = temp[temp.length - 1]
                            if (temp == "pdf") {
                                pic = docs[i][1].split(".pdf")[0] + ".png"
                            } else {
                                pic = docs[i][1].split("/d/")[1].split("/")[0]
                                pic = "https://lh3.googleusercontent.com/d/" + pic + "=w640"
                            }
                        }
                        append += '<a href="' + arr[i][1] + '" target="_blank"><div class="pdf"><div class="img-wrap ' + pick + '"><img src="';
                        append += pic + '"></div><p class="label">' + arr[i][0];
                        append += '</p></div></a>';
                    }

                    $(id + " .pdf-move").append(append);
                }

                $(id + ' #slides').click(function () {
                    update(0);
                });

                $(id + ' #youtube').click(function () {
                    update(1);
                });

                $(id + ' #docs').click(function () {
                    update(2);
                });

                function moveLeftPdfl() {
                    currpl += sizepl;
                    indexl -= 1;
                    $(id + " .pdf-move").css("transform", "translateX(" + currpl + "px)");
                };

                function moveRightPdfl() {
                    currpl -= sizepl;
                    indexl += 1;
                    $(id + " .pdf-move").css("transform", "translateX(" + currpl + "px)");
                };

                $(id + ' .fa-chevron-left.pa').click(function () {
                    sizepl = $(id + " .pdf-move a").width();
                    viewpl = parseInt($(id + " .pdf-wrap").width());
                    if (viewpl + sizepl * indexl > $(id + " .pdf-wrap").width())
                        moveLeftPdfl();
                });

                $(id + ' .fa-chevron-right.pa').click(function () {
                    sizepl = $(id + " .pdf-move a").width();
                    viewpl = parseInt($(id + " .pdf-wrap").width());
                    if (viewpl + sizepl * indexl < numpl * sizepl - $(window).width() * .03)
                        moveRightPdfl();
                });

                $(window).on('resize', function () {
                    sizepl = $(id + " .pdf-move a").width();
                    viewpl = parseInt($(id + " .pdf-wrap").width());
                    currpl = 0;
                    indexl = 0;
                    $(id + " .pdf-move").css("transform", "translateX(0%)");
                });
            }
        }
    });
}
$(initialize);
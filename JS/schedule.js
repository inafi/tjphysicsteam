function initialize() {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    //Drag Select
    try {
        var ds = new DragSelect({
            selectables: document.querySelectorAll('div.side p'),
            area: document.querySelector('body')
        });

        $('body').on('mousedown', 'p', function (event) {
            ds.removeSelection($(this).get(0));
        });
    } catch (error) {}

    //Event Hover in Month Grid Mode
    if (!isMobile) {
        $(document).on('mouseenter', 'a.fc-event', function () {
            $(this).children(".fc-content").css("display", "inline-block");
            $(this).children(".fc-content").css("overflow", "inherit");
            $(this).children(".fc-content").css("background-color", $(this).css("background-color"));
        }).on('mouseleave', 'a.fc-event', function () {
            $(this).children(".fc-content").css("overflow", "hidden");
            $(this).children(".fc-content").css("display", "block");
        });
    }

    //Change buttons to Upercase
    setInterval(function () {
        if ($(".fc-today-button").text() == "today")
            $(".fc-today-button").text("Today");
        if ($(".fc-right .fc-button-group > :first-child").text() == "list")
            $(".fc-right .fc-button-group > :first-child").text("List");
        if ($(".fc-right .fc-button-group > :last-child").text() == "month")
            $(".fc-right .fc-button-group > :last-child").text("Month");
    }, 100)

    //Calendar
    var calendarEl = document.getElementById('calendar');

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    //Calendar Tooltip on event hover
    if (!isMobile)
        var calendar = new FullCalendar.Calendar(calendarEl, {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'listMonth,dayGridMonth'
            },
            plugins: ['list', 'dayGrid'],
            defaultView: 'listMonth',
            eventOrder: 'color, start',
            eventClick: function (info) {
                var link = info.event.id.split(" __ ")[0];
                var desc = info.event.id.split(" __ ")[1];
                if (link != "")
                    openInNewTab(link);
            },
            eventMouseEnter: function (info) {
                var link = info.event.id.split(" __ ")[0];
                var desc = info.event.id.split(" __ ")[1];
                if (link != "") {
                    document.documentElement.style.cursor = "pointer";
                }
                if (desc != "")
                    $("div.desc").css("opacity", 1);
                $("div.desc").html(desc);
                $("div.desc").css("left", (event.clientX) + "px");
                $("div.desc").css("border-color", info.event.backgroundColor);
                if (event.clientY > $(window).height() * 0.5)
                    $("div.desc").css("top", (event.clientY - ($("div.desc").height() + $(window)
                        .height() *
                        0.03)) + "px")
                else
                    $("div.desc").css("top", (event.clientY + $(window).height() * 0.03) + "px")
            },
            eventMouseLeave: function (info) {
                $("div.desc").css("opacity", 0);
                document.documentElement.style.cursor = "inherit";
            }
        });
    else
        var calendar = new FullCalendar.Calendar(calendarEl, {
            header: {
                left: 'title',
                center: '',
                right: 'prev,next'
            },
            plugins: ['list', 'dayGrid'],
            defaultView: 'listMonth',
            eventOrder: 'color, start',
            eventClick: function (info) {
                var link = info.event.id.split(" __ ")[0];
                var desc = info.event.id.split(" __ ")[1];
                if (link != "")
                    openInNewTab(link);
            }
        });

    //Calendar Reading CSV to add events
    $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1-JfkEnNY_z5T_oKnxL70sVwqe-ZKnuOmXHwDXnh0f9g/?key=AIzaSyAjX2wnpSdfn5KkEvaTwXMkTqCXxRRIxm8&includeGridData=true",
        type: "get",
        async: false,
        success: function (data) {
            getDoc(4, '#BB0A21', "G");
            getDoc(1, '#06D6A0', "A");
            getDoc(2, '#1B98E0', "B");
            getDoc(3, '#3D348B', "C");

            function getDoc(req, color, type) {
                var arr = data.sheets[req].data[0].rowData;
                num = arr.length;

                for (i = 1; i < arr.length; i++) {
                    var date = "";
                    var title = "";
                    var desc = "";
                    var link = "";
                    var end = "";

                    try {
                        date = arr[i].values[0].formattedValue;
                        title = arr[i].values[1].formattedValue;
                        desc = arr[i].values[2].formattedValue;
                        link = arr[i].values[3].formattedValue;
                        if (req == 4) {
                            end = arr[i].values[4].formattedValue;
                            var me = end.split("/")[0];
                            me = me.length > 1 ? me : '0' + me;

                            var de = parseInt(end.split("/")[1]) + 1;
                            de = de > 9 ? de : '0' + de;
                        }
                    } catch (err) {}

                    if (date == null || end == null)
                        continue;

                    if (desc == null)
                        desc = ""

                    if (link == null)
                        link = ""

                    switch (type) {
                        case "G":
                            title = "General - " + title;
                            break;
                        case "A":
                            title = "A Team - " + title;
                            break;
                        case "B":
                            title = "B Team - " + title;
                            break;
                        case "C":
                            title = "C Team - " + title;
                            break;
                    }

                    var month = date.split("/")[0];
                    month = month.length > 1 ? month : '0' + month;

                    var day = date.split("/")[1];
                    day = day.length > 1 ? day : '0' + day;

                    var year = 2020;

                    if (parseInt(month) > 0 && parseInt(month) < 7)
                        year = 2021;

                    var dateStr = year + "-" + month + "-" + day;
                    var date = new Date(dateStr + 'T00:00:00');

                    if (req != 4)
                        end = date;
                    else {
                        var dateend = year + "-" + me + "-" + de;
                        end = new Date(dateend + 'T00:00:00');
                    }

                    if (desc == null)
                        desc = ""

                    if (link == null)
                        link = ""

                    calendar.addEvent({
                        title: title,
                        start: date,
                        end: end,
                        allDay: true,
                        backgroundColor: color,
                        id: link + " __ " + desc
                    });
                }
            }
        }
    });

    calendar.render();

    //Changes mode based on window height
    setTimeout(() => {
        if (!isMobile) {
            calendar.setOption('height', $(window).height() * .95);
            if ($(window).height() / $(window).width() > 0.65) {
                aspectside = false;
                if ($("#calendar").attr("view") == "grid")
                    calendar.changeView('listMonth');
            } else {
                aspectside = true;
            }
        }
    }, 50);

    //Changes mode based on window height
    $(window).on('resize', function () {
        if (!isMobile) {
            calendar.setOption('height', $(window).height() * .95);
            if ($(window).height() / $(window).width() > 0.65) {
                aspectside = false;
                if ($("#calendar").attr("view") == "grid")
                    calendar.changeView('listMonth');
            } else {
                aspectside = true;
            }
        }
    });
}
$(initialize);
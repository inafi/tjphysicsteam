function initialize() {

    var calendarEl = document.getElementById('calendar');

    var monthconvert = {
        'Jan': 'January',
        'Feb': "February",
        'Mar': "March",
        'Apr': "April",
        'May': "May",
        'Jun': "June",
        'Jul': "July",
        'Aug': "August",
        'Sep': "September",
        'Oct': "October",
        'Nov': "November",
        'Dec': "December"
    }

    var previnfo = "";

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        eventOrder: 'color,start',
        eventClick: function (info) {
            // alert('Event: ' + info.event.title);
            $(".side .date").text(monthconvert[(info.event.start + " ").split(" ")[1]] + " " + (
                info.event.start + " ").split(" ")[2]);
            var team;
            var desc = info.event.id;
            if (info.event.backgroundColor == "#06D6A0")
                team = "A Team " + "<a href='" + desc.split(' __ ')[0] +
                "' target='_blank'>Lecture</a>" + " on ";
            else if (info.event.backgroundColor == "#1B98E0")
                team = "B Team " + "<a href='" + desc.split(' __ ')[0] +
                "' target='_blank'>Lecture</a>" + " on ";
            else
                team = "C Team " + "<a href='" + desc.split(' __ ')[0] +
                "' target='_blank'>Lecture</a>" + " on ";
            console.log(info.event);
            $(".side .title").html(team + info.event.title);
            $(".side .desc").html(desc.split(" __ ")[1]);
            // alert($(".side").css("transform"));

            if ($(".side").attr("vis") == "off") {
                $(".side").css("transform", "translateX(25%)");
                $(".wrap").css("transform", "translateX(20%)");
                $(".wrap").css("width", "65%");
                $(".side").attr("vis", "on");
            } else if (previnfo != "" && previnfo == info.event.start + info.event.title + info
                .event
                .backgroundColor) {
                $(".side").css("transform", "translateX(-100%)");
                $(".wrap").css("transform", "translateX(0%)");
                $(".wrap").css("width", "75%");
                $(".side").attr("vis", "off");
            }
            previnfo = info.event.start + info.event.title + info.event.backgroundColor;
        }
    });

    var reqa =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQceVGvkhRKu73a7grDmOPnr0kQ1hBomcButE_ERqf4BlhbuJ1LLYWzZOFVKBo0wsVz4bupKXtlMk1A/pub?gid=0&single=true&output=csv";

    var reqb =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQceVGvkhRKu73a7grDmOPnr0kQ1hBomcButE_ERqf4BlhbuJ1LLYWzZOFVKBo0wsVz4bupKXtlMk1A/pub?gid=626361445&single=true&output=csv";

    var reqc =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQceVGvkhRKu73a7grDmOPnr0kQ1hBomcButE_ERqf4BlhbuJ1LLYWzZOFVKBo0wsVz4bupKXtlMk1A/pub?gid=993140585&single=true&output=csv";

    getDoc(reqa, '#06D6A0');
    getDoc(reqb, '#1B98E0');
    getDoc(reqc, '#3D348B');

    function getDoc(req, color) {
        $.ajax({
            url: req,
            type: "get",
            async: false,
            success: function (data) {
                var arr = Papa.parse(data).data;
                console.log(arr);
                for (i = 0; i < arr.length; i++) {
                    var month = arr[i][0].split("/")[0];
                    month = month.length > 1 ? month : '0' + month;

                    var day = arr[i][0].split("/")[1];
                    day = day.length > 1 ? day : '0' + day;

                    var year = 2020;

                    if (parseInt(month) > 0 && parseInt(month) < 7)
                        year = 2021;

                    var dateStr = year + "-" + month + "-" + day;
                    var date = new Date(dateStr + 'T00:00:00');

                    calendar.addEvent({
                        title: arr[i][1],
                        start: date,
                        allDay: true,
                        backgroundColor: color,
                        id: arr[i][3] + " __ " + arr[i][2]
                    });
                }
            }
        });
    };

    calendar.render();

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
    console.log(date.getUTCDay());
    $(".side .title").text($(".fc-left h2").text().split(" ")[0] + ' ' + date.getDate());

}
$(initialize);
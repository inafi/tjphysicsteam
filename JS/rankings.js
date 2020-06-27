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

    var req =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHEmL1GrN-9nTc4KXIoIxB1-Pv3bfb4OlZuaxuG8RuaSLVW9WLliYPyR_mPZaPDQ_7L0MwOjouxXM/pub?gid=0&single=true&output=csv";

    $.ajax({
        url: req,
        type: "get",
        async: false,
        success: function (data) {
            var arr = Papa.parse(data).data;
            var append = '';
            append += '<tr class="content t1">';

            for (i = 0; i < arr[0].length; i++)
                append += '<td>' + arr[0][i] + '</td>';

            append += '</tr>';
            append += '<tr class="content t2">';

            for (i = 0; i < arr[1].length; i++)
                append += '<td>' + arr[1][i] + '</td>';

            append += '</tr>'
            $("table.test").append(append);

            for (i = 2; i < arr.length; i++) {
                append = '<tr class="content">';
                for (k = 0; k < arr[0].length; k++) {
                    append += "<td>" + arr[i][k] + "</td>";
                }
                append += '</tr><tr class="space"></tr>'
                $("table.student").append(append);
            }

            $("table.student").css("height", (arr.length - 2) * 6 + "vh");
            $("td").css("width", "calc(100%/" + arr[0].length + ")")
        }
    });

    new DragSelect({
        selectables: document.querySelectorAll('td, footer div'),
        area: document.querySelector('body')
    });
}
$(initialize);
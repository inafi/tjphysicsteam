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

    var req = "https://sheets.googleapis.com/v4/spreadsheets/1vBfqcpmkNG3xDgoDCBVgLwaWlV4t88Ev8hlsyXMOPuo/?key=AIzaSyAjX2wnpSdfn5KkEvaTwXMkTqCXxRRIxm8&includeGridData=true";

    $.ajax({
        url: req,
        type: "get",
        async: false,
        success: function (data) {
            var arr = data.sheets[0].data[0].rowData;
            var append = '';
            append += '<tr class="content t1">';

            for (i = 0; i < arr[0].values.length; i++)
                append += '<td>' + arr[0].values[i].formattedValue + '</td>';

            append += '</tr>';
            append += '<tr class="content t2">';

            for (i = 0; i < arr[1].values.length; i++)
                append += '<td>' + arr[1].values[i].formattedValue + '</td>';

            append += '</tr>'
            $("table.test").append(append);

            for (i = 2; i < arr.length; i++) {
                append = '<tr class="content">';
                for (k = 0; k < arr[0].values.length; k++) {
                    append += "<td>" + arr[i].values[k].formattedValue + "</td>";
                }
                append += '</tr>'
                $("table.student").append(append);
            }

            $("table.student").css("height", (arr.length - 2) * 6 + "vh");
            $("td").css("width", "calc(100%/" + arr[0].values.length + ")")
        }
    });

    var ds = new DragSelect({
        selectables: document.querySelectorAll('td, footer div'),
        area: document.querySelector('body')
    });

    $('body').on('mousedown', 'td', function (event) {
        ds.removeSelection(document.querySelectorAll('td'));
    });
}
$(initialize);
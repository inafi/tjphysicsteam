function initialize() {
    var req = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQceVGvkhRKu73a7grDmOPnr0kQ1hBomcButE_ERqf4BlhbuJ1LLYWzZOFVKBo0wsVz4bupKXtlMk1A/pub?gid=0&single=true&output=csv";
    var num;
    var month = 9;
    var save;

    $.ajax({
        url: req,
        type: "get",
        async: false,
        success: function (data) {
            var arr = Papa.parse(data).data;
            console.log(arr);
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
    var curr = save * -15 ;

    view += save * 15;
    $(".event-wrap").css("transform", "translateX(" + save * -15 + "%)");

    function moveLeft() {
        curr += 15;
        view -= 15;
        console.log(view);
        $(".event-wrap").css("transform", "translateX(" + curr + "%)");
    };

    function moveRight() {
        curr -= 15;
        view += 15;
        console.log(view);
        $(".event-wrap").css("transform", "translateX(" + curr + "%)");
    };

    $('.fa-chevron-left').click(function () {
        if (view > 94)
            moveLeft();
    });

    $('.fa-chevron-right').click(function () {
        if (view < total)
            moveRight();
    });
}
$(initialize);
function initialize() {
    $(".fc-today-button").text("Today");
    $("body").on("click", function(){
        $(".fc-today-button").text("Today");
    })

    var date = new Date();
    console.log(date.getUTCDay());
    $(".side .title").text($(".fc-left h2").text().split(" ")[0] + ' ' + date.getDate());
}
$(initialize);
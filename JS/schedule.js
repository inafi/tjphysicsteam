function initialize() {
    $(".fc-today-button").text("Today");
    $("body").on("click", function(){
        $(".fc-today-button").text("Today");
    })
}
$(initialize);
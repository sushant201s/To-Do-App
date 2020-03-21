var sign = -1;

//functionality of the + icon to display the input box
$(".fa-plus").on("click", function () {
    $(".addToDo").css("display", "table-row");
})

//functionality to strike through the task when done
$("table").on("click", "td", function () {
    $(this).children("span").toggleClass("doneTask");
})

//functionality when  user hits enter in the input box to add task
$("input").on("keypress", function (event) {
    if (event.keyCode == 13) {
        //means enter key is pressed
        var task = $("input").val();
        //append to table
        if (sign == -1)
            $("table").append("<tr class='greyBg'><td><i class='far fa-trash-alt'></i><span>" + task + "</span></td></tr>");
        else
            $("table").append("<tr class='whiteBg'><td><i class='far fa-trash-alt'></i><span>" + task + "</span></td></tr>");
        sign = sign * -1;
        //make the input field blank
        $("input").val("");
        //remove the input field
        $(".addToDo").css("display", "none");
    }
})

//hovering over a task will give us the delete option
$("table").on("mouseover", "td", function () {
    $(this).children(".far").css("display", "inline-flex");
})

//remove the delete icon once mouse is taken away
$("table").on("mouseout", "td", function () {
    $(this).children(".far").css("display", "none");
})

//delete button click functionality
$("table").on("click", ".fa-trash-alt", function () {
    $(this).parent().parent().remove();
})
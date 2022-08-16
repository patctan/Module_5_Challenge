var templateLiteral = "This is a template literal";

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = today.format("h");

$(document).ready(function () {
  console.log(`hello ${templateLiteral}`);

  $(".btn").click(function (e) {
    e.preventDefault();
    console.log("clicked");
    var toDo = $(this).siblings(".toDo").val();
    var time = $(this).siblings(".hour").attr("id");
    console.log(toDo, time);
    localStorage.setItem(time, toDo);
  });

  for (var i = 9; i < 18; i++) {
    let toDo = localStorage.getItem(`${i}`);
    $("#" + `${i}`)
      .siblings(".toDo")
      .val(toDo);
  }
});

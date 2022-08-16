var templateLiteral = "This is a template literal";

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentTime = today.format("HH");
console.log("This is my currentTime" + currentTime);

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

for (var i = 9; i < 18; i++) {
  var innerHTMLTime = i;
  console.log("innerHTMLTime is " + innerHTMLTime);
  if (currentTime > innerHTMLTime) {
    console.log("string", $(`#${i}`));
    $(`#${i}`).siblings(".toDo").addClass("past");
  } else if (currentTime < innerHTMLTime) {
    $("#" + `${i}`)
      .siblings(".toDo")
      .addClass("future");
  } else {
    $("#" + `${i}`)
      .siblings(".toDo")
      .addClass("present");
  }
}

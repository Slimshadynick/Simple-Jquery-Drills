$(document).ready(function() {
  $("div").after("<ul></ul>");
  let $btn = $("#btnSubmit");
  $btn.prop("disabled", true);
  $("#listBtn").prop("disabled", true);
  $(":text").keyup(function() {
    if ($(":text").val() != "") {
      $("#btnSubmit").prop("disabled", false);
      $("#listBtn").prop("disabled", false);
    } else {
      $("#btnSubmit").prop("disabled", true);
      $("#listBtn").prop("disabled", true);
    }
  });
  $btn.click(function(e) {
    e.preventDefault();
    let $textInput = $(":text");
    let text = $textInput.val();
    let $h2 = $("<h2>" + text + "</h2>");
    $("div").append($h2);
    $h2.mouseover(function(e) {
      let $h = $(e.target);
      let color = getColor();
      $h.css("background-color", color);
      $h.css("border-radius", `${Math.floor(Math.random() * 30)}px`);
    });
  });
  $("#listBtn").click(function(e) {
    e.preventDefault();
    let $textInput = $(":text");
    let text = $textInput.val();
    let $li = $("<li>" + text + "</li>");
    $("ul").append($li);
    $li.click(function(e) {
      e.preventDefault();
      $li = $(e.target);
      let color = getColor();
      $li.css("background-color", color);
    });
    $li.dblclick(function(e){
      console.log("HI");
      e.preventDefault();
      let $li=$(e.target);
      $li.remove();
    })
  });
});

function getColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

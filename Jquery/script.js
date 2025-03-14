$(document).ready(function () {
  $("#para").text("<h1>Good</h1>");

  $("#remove").click(() => {
    $("#para").hide();
  });
  $("#show").click(() => {
    $("#para").show();
  });

  $("#addBtn").click(() => {
    $("#list").after("<li>" + $("#field").val() + "</li>");
  });

  $("#field").keyup(() => {
    $("#typedValue").text($("#field").val());
  });
  console.log($(".heading")[0]);

  //   $(".heading").mouseenter(function () {
  //     $(this).css("color", "blue");
  //   });
  //   $(".heading").mouseleave(function () {
  //     $(this).css("color", "black");
  //   });

  $(".heading").hover(
    function () {
      $(this).css("color", "blue");
    },
    function () {
      $(this).css("color", "black");
    }
  );

  $("#para").fadeIn(10000, function () {});
});

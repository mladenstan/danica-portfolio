$(document).ready(function () {
  $(".btn-moreless").click(function () {
    $(".moretext").slideToggle();
    if ($(".btn-moreless").text() == "Learn more about me") {
      $(this).text("Read less about me");
    } else {
      $(this).text("Learn more about me");
    }
  });
  $(".carousel").carousel({
    interval: 6000,
    pause: "false",
  });

  $(".btn-work").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#work").offset().top,
      },
      "slow"
    );
  });
});

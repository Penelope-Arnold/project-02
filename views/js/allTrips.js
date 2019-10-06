$.get("/api/posts", function(response) {
  for (var i = 0; i < response.length; i++) {
    console.log(response[i].country.toLowerCase());
    var image = $("<img>");
    image.attr("src", response[i].photo);
    image.attr("class", "tripImage");
    image.attr("id", i);
    image.attr("style", "padding: 10px");

    if (response[i].country.toLowerCase() === "japan") {
      $(".japan").append(image);
    } else if (response[i].country.toLowerCase() === "germany") {
      $(".germany").append(image);
    } else if (response[i].country.toLowerCase() === "australia") {
      $(".australia").append(image);
    } else if (response[i].country.toLowerCase() === "usa") {
      $(".usa").append(image);
    } else {
      $(".other").append(image);
    }
  }
});

// $(document).on("click", "button.red", addBgrnd);

// function addBgrnd() {
//   console.log("yes");
//   $(this).css("background-color", "red");
// }

$.get("/api/posts", function(response) {
  for (var i = 0; i < response.length; i++) {
    var image = $("<img>");
    image.attr("src", response[i].photo);
    image.attr("class", "tripImage");
    image.attr("id", i);
    image.attr("style", "padding: 10px");
    $(".mostPopular").append(image);
  }
});

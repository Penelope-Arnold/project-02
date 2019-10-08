$.get("/api/posts", function(response) {
  for (var i = 0; i < response.length; i++) {
    console.log(response[i].country.toLowerCase());
    console.log(response[i].city);

    var infoCard = $("<div>").addClass("card");
    infoCard.css({
      height: "300px",
      width: "auto",
      display: "inline-block",
      margin: "5px"
    });
    var h5 = $("<h5>");
    var icon = $("<i>").addClass("glyphicon glyphicon-heart-empty");
    icon.css({
      float: "right",
      margin: "10px"
    });

    var cityName = $("<span>");
    cityName.css({
      margin: "10px"
    });
    cityName.text(response[i].city);

    var description = $("<p>");
    description.text(response[i].description);

    h5.append(cityName);
    h5.append(icon);
    infoCard.append(h5);

    var image = $("<img>");
    image.css({
      height: "250px",
      width: "250px",
      "object-fit": "cover"
    });
    image.addClass("img-fluid");
    image.attr("src", response[i].photo);
    infoCard.append(image);
    infoCard.append(description);

    if (response[i].country.toLowerCase() === "japan") {
      $(".japan").append(infoCard);
    } else if (response[i].country.toLowerCase() === "germany") {
      $(".germany").append(infoCard);
    } else if (response[i].country.toLowerCase() === "australia") {
      $(".australia").append(infoCard);
    } else if (response[i].country.toLowerCase() === "usa") {
      $(".usa").append(infoCard);
    } else {
      $(".other").append(infoCard);
    }
  }

  icon.on("click", function() {
    $(this).css("background-color", "#d55d5d");
    //   //var id = $(this).data("id");

    //   // Send the PUT request.
    //   // $.ajax("/api/likes/" + id, {
    //   //   type: "PUT",
    //   //   data: likedTrips
    //   // }).then(function() {
    //   //   console.log("liked trips");
    //   //   location.reload();
    //   // });
  });
});

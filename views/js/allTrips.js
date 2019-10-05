var image;

for (var i = 1; i < 5; i++) {
  image = $("<img>");
  image.attr("src", "http://lorempixel.com/250/250/abstract/" + i);
  image.attr("class", "tripImage");
  image.attr("id", i);
  $(".mostPopular").append(image);
  console.log($("#" + i));
  $("#" + i).on("click", function() {
    event.preventDefault();
    // Post to database
    // app.put("/api/posts", function(req, res) {
    //     db.blogger.update(i, { where: { id: 1 } }).then(function(dbPost) {
    //     res.json(dbPost);
    //     });
    // });
    // Test with alert
    alert(i);
  });
}

for (var i = 1; i < 8; i++) {
  image = $("<img>");
  image.attr("src", "http://lorempixel.com/250/250/nature/" + i);
  image.attr("class", "tripImage");
  image.attr("id", i);
  $(".asia").append(image);
  console.log($("#" + i));
  $("#" + i).on("click", function() {
    event.preventDefault();
    // Post to database
    // app.put("/api/posts", function(req, res) {
    //     db.blogger.update(i, { where: { id: 1 } }).then(function(dbPost) {
    //     res.json(dbPost);
    //     });
    // });
    // Test with alert
    alert(i);
  });
}

for (var i = 1; i < 8; i++) {
  image = $("<img>");
  image.attr("src", "http://lorempixel.com/400/200/sports/" + i);
  image.attr("class", "tripImage");
  image.attr("id", i);
  $(".europe").append(image);
  console.log($("#" + i));
  $("#" + i).on("click", function() {
    event.preventDefault();
    // Post to database
    // app.put("/api/posts", function(req, res) {
    //     db.blogger.update(i, { where: { id: 1 } }).then(function(dbPost) {
    //     res.json(dbPost);
    //     });
    // });
    // Test with alert
    alert(i);
  });
}

for (var i = 1; i < 8; i++) {
  image = $("<img>");
  image.attr("src", "http://lorempixel.com/250/250/city/" + i);
  image.attr("class", "tripImage");
  image.attr("id", i);
  $(".australia").append(image);
  console.log($("#" + i));
  $("#" + i).on("click", function() {
    event.preventDefault();
    // Post to database
    // app.put("/api/posts", function(req, res) {
    //     db.blogger.update(i, { where: { id: 1 } }).then(function(dbPost) {
    //     res.json(dbPost);
    //     });
    // });
    // Test with alert
    alert(i);
  });
}

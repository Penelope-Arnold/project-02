$(document).ready(function() {
  /* global moment */
  console.log("js is running for display");
  // blogContainer holds all of our posts
  var postContainer = $("#post-container");
  postContainer.addClass("overflow-auto");
  // postContainer.ccs({"height": "290px"});
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons

  //$(document).on("click", "button.delete", handlePostDelete);
  // $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our posts
  var posts;

  // The code below handles the case where we want to get blog posts for a specific User
  // Looks for a query param in the url for User_id
  var url = window.location.search;
  var UserId;
  if (url.indexOf("?User_id=") !== -1) {
    UserId = url.split("=")[1];
    getPosts(UserId);
  }
  // If there's no UserId we just get all posts as usual
  else {
    getPosts();
  }

  // This function grabs posts from the database and updates the view
  function getPosts(User) {
    UserId = User || "";
    if (UserId) {
      UserId = "/?User_id=" + UserId;
    }
    $.get("/api/posts" + UserId, function(data) {
      //console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty(User);
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts" + id
    }).then(function() {
      getPosts(postCategorySelect.val());
    });
  }

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    postContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    postContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    console.log("this is the photo", post.photo);
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-title");
    var likeBTn = $("<button>");
    likeBTn.addClass("glyphicon glyphicon-heart-empty red");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newPostTitle = $("<h5>");
    var newPostDate = $("<small>");
    var newPostUser = $("<p>");
    var newPostPhoto = $("<img>");
    newPostPhoto.addClass("img-fluid");

    newPostPhoto.attr("src", post.photo);
    newPostUser.text("Written by: " + post.User.name);

    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.city + " ");

    ///
    newPostPhoto.append(post.photo);
    ///
    newPostBody.text(post.description);
    ////
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(likeBTn);
    //newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostUser);
    newPostCardBody.append(newPostPhoto);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    newPostCard.attr("class", "row");
    newPostCard.attr("class", "col-12");
    newPostCard.attr("style", "border-bottom: solid 2px");
    return newPostCard;
  }

  // This function displays a message when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for User #" + id;
    }
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html(
      "No posts yet" +
        partial +
        ", navigate <a href='/cms" +
        query +
        "'>here</a> in order to get started."
    );
    blogContainer.append(messageH2);
  }
});

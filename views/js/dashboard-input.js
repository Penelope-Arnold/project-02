$(document).ready(function() {
  //console.log("JS is running");
  // Getting jQuery references to the post body, title, form, and user select
  var cityInput = $("#city");
  var countryInput = $("#country");
  var categoryInput = $("#category");
  var descriptionInput = $("#description");
  var photoInput = $("#photo");
  var cmsForm = $("#cms");
  // var userSelect = $("#user");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var userId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  }
  // Otherwise if we have an user_id in our url, preset the user select box to be our User
  else if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
  }

  // Getting the users, and their posts
  //   getUsers();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();

    // Wont submit the post if we are missing a city, country, or category
    if (
      !cityInput.val() ||
      !countryInput.val() ||
      !categoryInput.val() ||
      !descriptionInput.val() ||
      !photoInput.val()
    ) {
      console.log("FORM ERROR");
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      city: cityInput.val().trim(),
      country: countryInput.val().trim(),
      category: categoryInput.val().trim(),
      description: descriptionInput.val().trim(),
      photo: photoInput.val().trim()
      //   UserId: userSelect.val()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  }

  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/dashboard";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an user's existing posts
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
      case "post":
        queryUrl = "/api/posts/" + id;
        break;
      case "user":
        queryUrl = "/api/users/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.UserId || data.id);
        // If this post exists, prefill our cms forms with its data
        cityInput.val(data.city);
        countryInput.val(data.country);
        categoryInput.val(data.category);
        descriptionInput.val(data.description);
        photoInput.val(data.photo);
        // userId = data.UserId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  function updatePost(post) {
    $.ajax({
      method: "POST",
      url: "/api/posts",
      data: post
    }).then(function() {
      window.location.href = "/dashboard";
    });
  }
});

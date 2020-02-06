// API for Pics page - Flickr

var n = "";
$.ajax({
  url:
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5ff62eef52bf9c6d7f8a255f5d95e2d1&text=running&sort=relevance&privacy_filter=1&safe_search=1&per_page=30&page=1&format=json&nojsoncallback=1",
  method: "GET"
}).then(function(result) {
  console.log(result);
  n = result;
  var _s = n.photos.photo;
  for (var z = 0; z < n.photos.photo.length; z++) {
    var CurrentPhotoUrl =
      "https://farm" +
      _s[z]["farm"] +
      ".staticflickr.com/" +
      _s[z]["server"] +
      "/" +
      _s[z]["id"] +
      "_" +
      _s[z]["secret"] +
      "_n.jpg";
    console.log(CurrentPhotoUrl);

    $("div.masonry-css-item").append('<img src="' + CurrentPhotoUrl + '">');
  }
});

// End of API for Pics page - Flickr

const render = function() {
    return `
<div class="row">
<div class="large-3 columns">
<h1><img src="https://i.ibb.co/ZB5GdDJ/7e4f933c-6533-4784-84f2-e91e9f6d7c45-200x200.png"></a></h1>
</div>
</div>
<div class="row">
<div class="large-9 push-3 columns">
  <form>
  <div class="sign-in-form">
    <h4 class="text-center">Sign In</h4>
    <label for="sign-in-form-username">Username</label>
    <input type="text" class="sign-in-form-username" id="sign-in-form-username">
    <label for="sign-in-form-password">Password</label>
    <input type="text" class="sign-in-form-password" id="sign-in-form-password">
    <button type="submit" class="sign-in-form-button">Sign In</button>
  </div>
</form>
</div>
<div class="large-3 pull-9 columns">
<ul class="side-nav">
<li><a href="#">Home</a></li>
<li><a href="#">Progress</a></li>
<li><a href="#">Community</a></li>
<li><a href="#">Pics</a></li>
</ul>
<p><img src="https://i.ibb.co/n3L3B9X/sherise-Atohf63-B8-Dg-unsplash.jpg" alt="sherise-Atohf63-B8-Dg-unsplash"></a></p>
</div>
</div>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation.min.js"></script>
<script>
      $(document).foundation();
    </script>
</body>
    `
}

exports.render = render;
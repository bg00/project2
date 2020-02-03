const render = function() {
    return `
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en">
<head>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Foundation 5</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/normalize.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.min.css">
<link href='https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css' rel='stylesheet' type='text/css'>

<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
<link rel="stylesheet" href="/style.css">

</head>
<body>

<div class="row">
<div class="large-3 columns">
<h1><img src="/images/logo.png"></a></h1>
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
<p><img src="/images/runners.jpg"></a></p>
</div>
</div>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation.min.js"></script>
<script>
      $(document).foundation();
    </script>
</body>
</html> `
}

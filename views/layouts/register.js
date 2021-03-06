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

<form action="action_page.php">
        <div class="container">
            <div class="row">
                <div class="column">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br>
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required>
          <br>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
          <br>
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
          <br>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required>
          <br>
          <label for="dob"> <b>DOB</b></label>
          <input type="date" name="bday" required>
          <br>
          <label for="height"> <b>Height</b></label>
          <input type="text" placeholder="Enter Height" name="height" required>
          <br>
          <label for="weight"> <b>Weight</b></label>
          <input type="text" placeholder="Enter Weight" name="weight" required>
          <br>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn">Submit</button>
          <button type="cancel" class="cancelbtn">Cancel</button>
        <div class="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
        </div>
        </div>
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
<footer class="row">
<div class="large-12 columns">
<hr />
<div class="row">
<div class="large-6 columns">
<p>&copy; Copyright 2020, Fitness with Friends</p>
</div>
</div>
</div>
</footer>
</div>

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation.min.js"></script>
<script>
      $(document).foundation();
    </script>
</body>
</html> `
}
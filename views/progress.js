const render = function() {
    return  `
    <div class="row">
<div class="large-3 columns">
<h1><img src="/images/logo.png"></a></h1>
</div>
</div>
<div class="row">
<div class="large-9 push-3 columns">
<form class="callout text-center">
  <h2>Track your workouts over time!</h2>
  <div class="floated-label-wrapper">
    <label for="date">Date of run</label>
    <input type="date" id="time" name="date and time" placeholder="Date">
  </div>
  <div class="floated-label-wrapper">
    <label class="miles" for="full-name">Miles ran</label>
    <input type="number" id="full-name" name="full name input" placeholder="Miles">
  </div>
  <div class="floated-label-wrapper">
    <label id="calories" for="email">Calories burned</label>
    <input type="number" id="email" name="email input" placeholder="Calories">
  </div>
  <button type="submit" id="submitbtn" class="progress-form-button">Track this run!</button>
  <button type="clear" id="cancelbtn"  class="progress-form-button">Wanna start over?</button>
</form>
</div>
<div class="large-3 pull-9 columns">
<ul class="side-nav">
<li><a href="#">Home</a></li>
<li><a href="#">Progress</a></li>
<li><a href="#">Community</a></li>
<li><a href="#">Pics</a></li>
</ul>
</div>
</div>
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script>
      $(document).foundation();
    </script>
  <script src="/script.js"></script>
    `
}

exports.render = render;
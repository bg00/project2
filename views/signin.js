const render = function() {
    return `
    <div class="register-block">
    <div class="register-button"><a href="api/registers">Register</a></div>
  </div>

  <header>
    <a href=""><img class="logo" src="/assets/img/logo.png"></a>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Progress</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">Pictures</a></li>
      </ul>
    </nav>
  </header>

  <div class="hero">
    <img src="/assets/img/splash.jpg">
    <div class="login-block">
      <div class="login-section">
        <form>
          <div class="sign-in-form">
            <h4 class="text-center">Sign In</h4>
            <label for="sign-in-form-username">Username</label>
            <input type="text" class="sign-in-form-username" id="sign-in-form-username">
            <label for="sign-in-form-password">Password</label>
            <input type="text" class="sign-in-form-password" id="sign-in-form-password">
            <button type="submit" href="/home"class="sign-in-form-button">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    `
}

exports.render = render;
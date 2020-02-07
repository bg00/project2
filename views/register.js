const render = function() {
  return `

  <form: form method="POST" action="/api/registers" >
    <div class="container">
      <div class="row">
        <div class="column">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br>
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" class="username" name="username" required>
          <br>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" class="psw" name="psw" required>
          <br>
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" class="psw-repeat" name="psw-repeat" required>
          <br>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" class="email" name="email" required>
          <br>
          <label for="dob"> <b>DOB</b></label>
          <input type="date" class="dob" name="bday" required>
          <br>
          <label for="height"> <b>Height</b></label>
          <input type="text" placeholder="Enter Height" class="height" name="height" required>
          <br>
          <label for="weight"> <b>Weight</b></label>
          <input type="text" placeholder="Enter Weight" class="weight" name="weight" required>
          <br>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="submitbtn">Submit</button>
          <button type="cancel" class="cancelbtn">Cancel</button>
          <div class="container signin">
            <p>Already have an account? <a href="/">Sign in</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </form>
  `
}

exports.render = render;
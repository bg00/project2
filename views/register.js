const render = function() {
  return `
  <form action="action_page.php">
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br>

          <label for="username"><b>Username</b></label>
          <input type="text" class="username" placeholder="Enter Username" name="username" required>
          <br>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" class="password" placeholder="Enter Password" name="psw" required>
          <br>
      
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
          <br>

          <label for="email"><b>Email</b></label>
          <input type="text" class="email" placeholder="Enter Email" name="email" required>
          <br>
          
          <label for="dob"> <b>DOB</b></label>
          <input type="date" class="dob" name="bday" required>
          <br>

          <label for="height"> <b>Height</b></label>
          <input type="text" class="height" placeholder="Enter Height" name="height" required>
          <br>

          <label for="weight"> <b>Weight</b></label>
          <input type="text" class="weight" placeholder="Enter Weight" name="weight" required>
          <br>

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn">Submit</button>

          <button type="cancel" class="cancelbtn">Cancel</button>
        </div>
      
        <div class="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </form>
  `
}

exports.render = render;
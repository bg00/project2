$( document ).ready(function() {
   
    $(".submitbtn").on("click", function(event) {
        
        console.log("register button invoked");
        event.preventDefault();

        let registerData = {
            username: $(".username").val(),
            password: $(".psw").val(),
            email: $(".email").val(),
            dob: $('.dob').val(),
            height: $('.height').val(),
            weight: $('.weight').val()
        };
        console.log("register button invoked...");
        // Send the POST request - 
        $.ajax("/api/registersubmit", {
            type: "POST",
            data: registerData
        })
    });

    $(".cancelbtn").on("click", function(event){
        console.log ("Cancel is called");
       // Make sure to preventDefault on a cancel event.
       event.preventDefault(); 

       let registerData = {
        username: $(".username").val(''),
        password: $(".psw").val(''),
        email: $(".email").val(''),
        dob: $('.dob').val(''),
        height: $('.height').val(''),
        weight: $('.weight').val('')
    };
        // Send the POST request
        $.ajax("/api/registers/", {
            type: "POST",
            data: registerData
        }
        );

    });

});
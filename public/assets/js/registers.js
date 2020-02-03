$(function() {
    $(".registerbtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let registerData = {
            username: $(".username").val().trim(),
            password: $(".password").val().trim(),
            email: $(".email").val().trim(),
            dob: $('.dob').val().trim(),
            height: $('height').val().trim(),
            weight: $('weight').val().trim()
        };
        
        // Send the POST request - 
        $.ajax("/api/registers", {
            type: "POST",
            data: registerData
        }).then(
            function() {
                console.log("Register Page");
                // Reload the page to get the updated list
                location.reload("/");
            }
        );
    });

    $(".cancelbtn").on("click", function(event){
       // Make sure to preventDefault on a cancel event.
       event.preventDefault(); 

       let registerData = {
        username: $(".username").val(''),
        password: $(".password").val(''),
        email: $(".email").val(''),
        dob: $('.dob').val(''),
        height: $('height').val(''),
        weight: $('weight').val('')
    };
        // Send the POST request
        $.ajax("/api/registers/", {
            type: "POST",
            data: registerData
        }).then(
            function() {
                console.log("Changed devoured to 1");
                location.reload();
            }
        );

    });

});
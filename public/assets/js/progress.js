$(function() {
    $("#submitbtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let progressData = {
            caloriesBurnt: $("#calories").val().trim(),
            milesRun: $(".miles").val().trim(),
        };
        
        // Send the POST request - 
        $.ajax("/api/registers", {
            type: "POST",
            data: progressData
        }).then(
            function() {
                console.log("Register Page");
                // Reload the page to get the updated list
                location.reload("/");
            }
        );
    });

    $("#cancelbtn").on("click", function(event){
       // Make sure to preventDefault on a cancel event.
       event.preventDefault(); 

       let progressData = {
        caloriesBurnt: $("#calories").val(''),
        milesRun: $(".miles").val(''),
    };
        // Send the POST request
        $.ajax("/api/progress/", {
            type: "POST",
            data: progressData
        }).then(
            function() {
                console.log("Changed devoured to 1");
                location.reload();
            }
        );

    });

});
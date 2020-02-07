$(document).ready(function () {
    $(".sign-in-form-button").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        console.log("Entering here");
        event.preventDefault();

        let registerData = {
            username: $("#sign-in-form-username").val().trim(),
            password: $("#sign-in-form-password").val().trim()
        };

        console.log(registerData.username);
        console.log(registerData.password);

        $.ajax("/api/home", {
            type: "GET",
            data: registerData
        }).then(data => {
            var newDoc = document.open("text/html", "replace");
            newDoc.write(data);
            newDoc.close();
        })
    });
});
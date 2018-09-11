$(function() {

    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        console.log("click");
        var newBurger = {
            burger: $("#input").val().trim()
        };
        console.log(newBurger.burger);

        $.post("/api/burgers", newBurger)
          .then(
            function() {
                console.log("New burger " + newBurger.burger + " added!");

                location.reload();
            });
    });

})
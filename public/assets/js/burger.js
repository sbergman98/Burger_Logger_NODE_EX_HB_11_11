// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change_burger_name").on("click", function(event) {
    const id = $(this).data("id");
   
   

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
     
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
        alert("Blah blah...");
      }
    );
  });

 

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        // location.reload();
        alert("Blah blah...");
      }
    );
  });

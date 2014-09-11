"use strict";

// Executed as soon as the page loads
$(function() {

    // Cache the fields for name and location
    var $evangelists = $('#evangelists');
    var $name        = $('#name');
    var $location    = $('#location');


    // GET LATEST RESULTS FROM JSON DATA HERE
    $.ajax({
        type: 'GET',
        url: "js/evangelists.json",

        // Draw every evangelist in our json file to the screen
        // using a number wroks here, but if I use [i], it returns null. Odd?
        success: function (data) {
            $.each(data.evangelist, function (i, item) {
                $evangelists.append('<li>Name: ' + item.name + ' Location: ' +item.location + '</li>');
                console.log(data.evangelist);
            });

        },
        error: function() {
            alert("error retrieving evangelists");
        }
    });


    // When we click on the button, we add a new evangelist to the list
    $('#btn-add-evangelist').on('click', function() {

        // Add an eveangelist object to the list
        var evangelist = {
            name: $name.val(),
            location: $location.val(),
        };

        // ADD POST REQUEST HERE
    });

});



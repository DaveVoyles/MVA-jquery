"use strict";

// Executed as soon as the page loads
$(document).ready(function () {

    // Cache the fields for name and location
    var $evangelists = $('#evangelists');
    var $name        = $('#name');
    var $location    = $('#location');

    // Post or Get JSON data with one function
    function addEvangelist(data) {
        $evangelists.append('<li>Name: ' + data.name + ' Location: ' + data.location + '</li>');
    }

    // Get latest JSON data from server 
    $.ajax({
        type: 'GET',
        url: 'assets/data/evangelists.json',

        // Draw every evangelist in our json file to the screen
        success: function (data) {
            $.each(data.evangelist, function (i, item) {
                addEvangelist(item);
            });
        },
        error: function() {
            alert("error retrieving evangelist data");
        }
    });


    // When we click on the button, we add a new evangelist to the list
    $('#btn-add-evangelist').on('click', function() {

        // Add an eveangelist object to the list
        var evangelist = {
            name:     $name.val(),
            location: $location.val(),
        };
        
        jQuery.support.cors = true;
        // Push evanegelist object to JSON file
        //TODO: You can't "write out" a JSON file without server side 
        $.ajax({
            type: 'POST',
            url: 'assets/data/evangelists.json',
            data: evangelist,

            // Draw every evangelist in our json file to the screen
            success: function (data) {
                $.each(data.evangelist, function (i, item) {
                    addEvangelist(item);
                });
            },
            error: function () {
                alert("error posting evangelist data");
            }
        });
    });

});



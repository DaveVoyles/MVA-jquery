"use strict";

// Executed as soon as the page loads
$(document).ready(function () {
    restGet();
});

// Cache the fields for name and location
var xhr          = new XMLHttpRequest();
var $evangelists = $('#evangelists');
var $name        = $('#name');
var $location    = $('#location');


/* When we click on the button, we add a new evangelist to the list
*******************************************************************/
$('#btn-add-evangelist').on('click', function () {

    // Add an eveangelist object to the list
    var evangelist = {
        name:     $name.val(),
        location: $location.val(),
    };
    restPost(evangelist);
});


/* GET data from the server and draw it to the page
***************************************************/
function restGet(){
    $.ajax({
        url:       'https://evangelists.azure-mobile.net/tables/people',
        type:      'GET',
        datatype:  'json',
        beforeSend: setHeader,      
       
        success: function(data) { 
            var len = data.length;

            for(var i=0; i<len; i++){
                $evangelists.append('<li>Name: ' + data[i].name + ",&nbsp;&nbsp;" + ' Location: ' + data[i].location + '</li>');
            }
        },
        error: function() { alert('Failed!'); }, 
    });   
}


/* POST our newly entered data to the server
********************************************/
function restPost(evangelist){
    $.ajax({
        url:        'https://evangelists.azure-mobile.net/tables/people',
        type:       'POST',
        datatype:   'json',
        beforeSend: setHeader,   
        data:       evangelist,

        success: function (data) {
            var len = data.length;

            for (var i = 0; i < len; i++) {
                $evangelists.append('<li>Name: ' + data[i].name + ",&nbsp;&nbsp;" + ' Location: ' + data[i].location + '</li>');
            }
        },
        error:      function() { alert('Failed!'); },    
    });   
}


/* Used for authorization, to access the JSON data in the Azure Mobile Service
******************************************************************************/
function setHeader(xhr) {
    xhr.setRequestHeader('X-ZUMO-APPLICATION', 'ImDNVYiBYFCuENASFmQupAMlDUzamP37');
}




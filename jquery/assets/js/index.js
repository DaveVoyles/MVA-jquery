"use strict";

// Executed as soon as the page loads
$(document).ready(function () {
    restGet();
});

var xhr          = new XMLHttpRequest();

// Cache the fields for name and location
var $evangelists = $('#evangelists');
var $name        = $('#name');
var $location    = $('#location');


/* When we click on the button, we add a new evangelist to the list
***************************************************************/
$('#btn-add-evangelist').on('click', function () {

    // Add an eveangelist object to the list
    var evangelist = {
        name:     $name.val(),
        location: $location.val(),
    };
    // TODO: pass in evangelist object to restPost
    restPost(evangelist);
});


/* GET data from the server and draw it to the page
***************************************************/
function restGet(){
    $.ajax({
        url:      'https://evangelists.azure-mobile.net/tables/people',
        type:     'GET',
        datatype: 'json',
        
        // Retrieve JSON from the server
        success: function(data) { 
            var len = data.length;
        
            for(var i=0;i<len;i++){
                $evangelists.append('<li>Name: ' + data[i].name + ' Location: ' + data[i].location + '</li>');
                console.log("Returned data");
                console.log(data[i]);
            }
        },
        error: function() { alert('Failed!'); },
        beforeSend: setHeader       
    });   
}


/* POST our newly entered data to the server
********************************************/
function restPost(evangelist){
    $.ajax({
        url:      'https://evangelists.azure-mobile.net/tables/people',
        type:     'POST',
        datatype: 'json',
        //data:{'name':'Stacey Mulcahy','location':'New York City'},
        data: evangelist,
        success: function (data) {
            var len = data.length;

            for (var i = 0; i < len; i++) {
                console.log(data);
                addEvangelist(data);
            }
        },
        error:      function() { alert('Failed!'); },
        beforeSend: setHeader       
    });   
}


/* Used for authorization, to access the JSON data in the database
******************************************************************/
function setHeader(xhr) {
    xhr.setRequestHeader('X-ZUMO-APPLICATION', 'ImDNVYiBYFCuENASFmQupAMlDUzamP37');
}


/* Post or Get JSON data with one function
******************************************/
function addEvangelist(data) {
    $evangelists.append('<li>Name: ' + data.name + ' Location: ' + data.location + '</li>');
}


/**
 * 
 */

/**
 * 
 */
var token = "eyJhbGciOiJIUzUxMiJ9.bhhjSTVgjhbjhREYbhSRQWEkJOUITU3MjEwLCJleHAiOjE1NTk3NjIwMTB9.oXHw-S4fPdJHKUYGwCFHjkHDFRSWNJILGdXYRyb3lGyjkqNGxIMusdPPPOi00v6Jtf7axkqfnF3rjkHWzwIbXg";

function getDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/PAF/PAF/Project",
        type: "GET",
        contentType: "application/json", 
        headers: {"Authorization": "Bearer " + token},        
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            
        	var items = [];
        	
        	$.each(data, function(key, val){
        		items.push("<tr>");
        		items.push("<td>" + val.id + "</td>");
                items.push("<td>" + val.project_category + "</td>");
        		items.push("<td>" + val.project_name + "</td>");
        		items.push("<td>" + val.description + "</td>");
        		items.push("<td>" + val.price + "</td>");
        		items.push("<td>" + val.date + "</td>");
                items.push("<td>" + val.project_goal + "</td>");
        		items.push("<tr>");
        	});
        	$("<tbody/>", {html: items.join("")}).appendTo("#all_projects");

        }, 
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#name").text("Sorry! Project not found!");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function getDetailsById(){
	jQuery.ajax({
        url: "http://localhost:8080/PAF/PAF/Project/" + parseInt($("#project_id").val()),
        type: "GET",
        contentType: "application/json", 
        headers: {"Authorization": "Bearer " + token},        
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            
        	var items = [];
        	
        	
        		items.push("<tr>");
        		items.push("<td>" + data.id + "</td>");
                items.push("<td>" + data.project_category + "</td>");
        		items.push("<td>" + data.project_name + "</td>");
        		items.push("<td>" + data.description + "</td>");
        		items.push("<td>" + data.price + "</td>");
        		items.push("<td>" + data.date + "</td>");
                items.push("<td>" + data.project_goal + "</td>");
        		items.push("<tr>");
        	
        	$("<tbody/>", {html: items.join("")}).appendTo("#one_project");

        }, 
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#error_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Project Not Found!</div>");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function addProjects(){
	console.log('addWine');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        headers: {"Authorization": "Bearer " + token},
        url: "http://localhost:8080/PAF/PAF/Project",
        dataType: "json",
        data: AddNewProjectformToJSON(),
        success: function(response){
        	$("#pro_add_msg").html("<div class=\"alert alert-success\" role=\"alert\">Project added successfuly!</div>");
        },
        error: function(jqXHR, textStatus, errorThrown){
        	$("#pro_add_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Something went wrong!</div>");
        }
    });
};

function removeProjectById(){
	jQuery.ajax({
        url: "http://localhost:8080/PAF/PAF/Project/" + $("#del_project_id").val(),
        type: "DELETE",
        contentType: "application/json",  
        dataType:'json',
        headers: {"Authorization": "Bearer " + token},
        success: function(data, textStatus, errorThrown) {
        	$("#pro_del_msg").html("<div class=\"alert alert-success\" role=\"alert\">Project deleted successfuly!</div>");
        },
        error : function(jqXHR, textStatus, errorThrown) {
        	$("#pro_del_msg").html("<div class=\"alert alert-danger\" role=\"alert\">Something went wrong!</div>");
        },
        timeout: 120000,
    });
};


function AddNewProjectformToJSON() {
    return JSON.stringify({
        "project_category" : $('#project_category').val(),
        "project_name" : $('#project_name').val(),
        "description": $('#project_desc').val(),
        "price": parseFloat($('#project_price').val()),
        "date" : $('#project_date').val(),
        "project_goal" : $('#project_goal').val()
        
    });
}
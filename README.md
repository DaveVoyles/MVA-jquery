#Building a Web Application with AngularJS
##Date: 10/20/2014
##Version: v1.0.0
##Author(s): Dave Voyles | [@DaveVoyles](http://www.twitter.com/DaveVoyles)
##URL: [www.DavidVoyles.wordpress.com]()

----------
###Description
SPA, or Single Page Applications help you build programs that include significant client-side interactions using HTML 5, CSS 3 and JavaScript.

Take advantage of jQuery and AngularJS to dynamically update HTML5-based apps, and learn how AJAX works for asynchronous calls. Simplify the development process by separating the model, view, and controller for your web apps, enabling your content to work within a browser and within mobile applications as well.

[This GitHub repository](https://github.com/DaveVoyles/MVA-jquery) includes two projects: 

1. jQuery
2. Angular

They have identical functionality, but we wanted to illustrate how simple it was to get started with one jQuery, and segue into using Angular. 

This project allows you to GET a JSON object from an Azure Mobile Service (included), as well as POST JSON object to the service.

Wrap your apps in something like Cordova with the Intel XDK and have it work on all mobile devices. This is perfect for hackathons! [You can find a template and tutorial on how to do that here. ](https://github.com/DaveVoyles/Ska-Studios-Xplatform)

## Course Outline

[Stacey Mulcahey ](www.twitter.com/bitchwhocodes) and I put together a Microsoft Virtual Academy course on how to create this entire project. The video tutorial outline is follows:

- Understanding Single Page Apps​
- Using jQuery to Make a SPA & creating a Mobile Service
- Debugging and Testing
- Understanding Frameworks
- Introduction to AngularJS
- Using ​AngularJS to Create a SPA
- Deploying to Azure

###Features
 - Runs on nearly every device that has a browser 

###Requirements
- A text editor
- PC or Mac
- A web server (local or remote - [Azure](http://davevoyles.azurewebsites.net/bizspark-free-software-cloud-services-o/))


###Setup
1. Download the source from [GitHub](https://github.com/DaveVoyles/MVA-jquery)
2. Set up your web server (either local or remote)
3. Deploy the site!



----------

##FAQ
**Where can I get free hosting to store my website or app**

[Microsoft's BizSpark ](http://davevoyles.azurewebsites.net/bizspark-free-software-cloud-services-o/) offers startups and select student developers the ability to host their websites or applications in the cloud, using Azure. Reach out to me via the link above to get signed up for a new account.

**Where should I start?**
Take a look at the MVA course that Stacey and I did. That walks you through the entire process of building this application, along with the source code for both. 

----------
## Resources
- [Microsoft's BizSpark ](http://davevoyles.azurewebsites.net/bizspark-free-software-cloud-services-o/)
- [AngularJS Intellisense in Visual Studio](http://stackoverflow.com/questions/19709538/visual-studio-2013-angularjs-intellisense-support)
- [Angular code snippets in Visual Studio](http://www.johnpapa.net/angularjs-code-snippets-for-visual-studio/
)
- [Angular style guide ](https://github.com/johnpapa/angularjs-styleguide#single-responsibility
)


------------
## Quick Notes / Study Gude

###Separation of concerns
- Angular - View and controller never interact directly. Angular simplifies these scenarios, and has a separation of concerns 

- jQuery - JS directly manipulates events.  Looks inside HTML to find elements and catch events.  


###Larger Applications
- Multiple controllers - perhaps even on the same page
- Each controller is responsible for diff. features or areas of data 


###$http Service
- Simplifies GET, POST, PUT, Delete
- Returns a promise -- will return something in the future


###Modules
- Provide a container for code to live, without cluttering the global namespace 
- Can have multiple controllers within a single module

Ex: angular.module('finance2', [])


##Controllers
- Behavior behind the DOM elements
- JavaScript functions which are bound to a particular scope
- Attached to the DOM via the ng-controller directive. 
- Pass in $scope as an argument
- Use controllers to:
		- Set up the initial state of the $scope object.
		- Add behavior to the $scope object.
	
	- ng-controller
		-  Defines a controller to be bound with the view. 
	

##Directives
- Function which executes when the compiler encounters it in the DOM
- Allow for indirect model <-> view interaction
- Apply special behavior to attributers or elements in HTML	

##Scope
- Object that connects the View with Controller
- Data binding: Moves model data -> View
- Basically equal to using "this" in JS
	

##Compiling
- compile traverses the DOM and matches directives
- Sorts the directives by priority
- Links DOM & Scope, then creates a live binding between the two


##Data Binding
- Automatic way of updating the view whenever the model changes 

	 - jQuery way:
		- Write text on an input
		- Create variables to find divs
		- Have event listener on new div, to draw text based on what you wrote  in input
	
	- Angular way
		- Write some HTML
		- Add expressions and  data bindings 


----------

##Change Log
###v1.0.0
Initial build of the app


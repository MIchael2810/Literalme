import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../lib/collections.js';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.mainBody.events({
	'click.js-like'(event, instance) {		
	var profID = this._id;

  	var numLikes = userDB.findOne({_id:profID}).like;

  	if (!numLikes) {
  		numLikes = 8;
  	
  	}

  	console.log("like");

  	numLikes = numLikes + 1;
		console.log("you have",numLikes);
  	userDB.update ({_id:profID}, {$set:{'like':numLikes}});
	},
});

Template.mainBody.helpers({
	profAll(){
		return userDB.find({});
 


	}
}); 

	Template.addProfile.events({ 
 'click .js-saveProfile'(event, instance) { 

 	var fName = $("#exampleModal input[name='FirstName']").val();
 	var lName = $("#exampleModal input[name='LastName']").val();
 	var Imagepic = $("#exampleModal input[name='Imagepic']").val();
 	if(Imagepic ==""){
 		Imagepic ="bear.gif";
 	}
 	
 	console.log("The first name is",fName)
	console.log("The Last name is",lName)
 	console.log("The Image",Imagepic)

	$("#exampleModal input[name='FirstName']").val('');
	$("#exampleModal input[name='LastName']").val('');
	$("#exampleModal input[name='Imagepic']").val('');
	
	$("#exampleModal").modal("hide");
	userDB.insert({'FirstName':fName, 'LastName':lName, 'Imagepic':Imagepic});
  },
});
if(Meteor.isClient){

	Template.quiz1.helpers({

		'project': function(){
			return Projects.find({}, {sort: {projectName: 1, first: 1, last: 1}});
		}
	});

	Template.quiz1.events({
		'click .remove': function(){
			var playerId = this._id;
			Session.set('selectedInfo',playerId);
      		var selectedInfo = Session.get('selectedInfo');
      		Projects.remove(selectedInfo);
    	},

		'submit #addProject': function(event){
			event.preventDefault();
			var projName = event.target.projectName.value;
			var firstName = event.target.first.value;
			var lastName = event.target.last.value;
			var meteor = event.target.meteorURL.value;
			var git = event.target.gitURL.value;
			Projects.insert({projectName:projName, first:firstName, last:lastName, meteorURL:meteor, gitURL:git});
		 }
	});
}
Template.quiz1form.helpers({
	projectdata: function(){
		var projectobj = Projects.findOne({});

		// if (ipobj==undefined){
		// 	ipobj = {uid:Meteor.userId(), name:"", ip:""};
		// 	IPAddresses.insert(ipobj);
		// 	ipobj = IPAddresses.findOne({uid:Meteor.userId()});
		// }
		return projectobj;
	}
})


Template.quiz1form.events({
	"submit #editquiz1form": function(event){
		event.preventDefault();

		var first = event.target.first.value;
		var last = event.target.last.value;
		var project = event.target.project.value
		var gitURL = event.target.gitURL.value;
		var meteorURL = event.target.meteorURL.value;
		console.log(JSON.stringify(this));

		Projects.update(this._id, {$set:{first:first, last:last, project:project, gitURL: gitURL, meteorURL:meteorURL}});

		Router.go('/quiz1table');
		
	},

		"submit #createquiz1form": function(event){
		event.preventDefault();

		var first = event.target.first.value;
		var last = event.target.last.value;
		var project = event.target.project.value
		var gitURL = event.target.gitURL.value;
		var meteorURL = event.target.meteorURL.value;
		console.log(JSON.stringify(this));

		Projects.insert(this_id, {first:first, last:last, project:project, gitURL: gitURL, meteorURL:meteorURL});

		Router.go('/quiz1table');
		
	}
})
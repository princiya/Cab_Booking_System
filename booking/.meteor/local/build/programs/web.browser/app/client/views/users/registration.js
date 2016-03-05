(function(){Template.registration.helpers({})
//form for registering new users
AutoForm.hooks({
	registrationForm: {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			Meteor.users.simpleSchema().clean(insertDoc);
			console.log(insertDoc);
			Accounts.createUser({ //input fields
					username: insertDoc.username,
					emails: insertDoc.emails,
					password: insertDoc.password,
					roles: insertDoc.roles
				}, function(error, status) {
					console.log(error);
			});
			this.event.preventDefault();
			return false;
		}
	}
})
}).call(this);

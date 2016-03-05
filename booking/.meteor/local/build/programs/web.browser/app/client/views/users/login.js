(function(){//login page as the first page

Template.loginPage.rendered = function() {
};
Tracker.autorun(function() {
	try {
		if(Meteor.user() && Router.current().route.getName() == "loginPage") {
			Router.go('/'+Session.get('loginRedirect'))
		}
	}
	catch (e) {}
});

//input fields
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 4
    },
    {
        _id: "password",
        type: "password",
        displayName: "password",
        required: true,
        minLength:4
    }

]);

}).call(this);

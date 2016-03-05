Template.navbar.events({
	'click #nextDay': function() {
		//if current route == calendar then change current month
		changeParams({date: moment(Session.get("date")).add(1, 'day').format("YYYY-MM-DD")});
	},
	'click #prevDay': function() {
		changeParams({date: moment(Session.get("date")).subtract(1, 'day').format("YYYY-MM-DD")});
	},
	'click #datetimepicker1': function() {
		$('#datetimepicker1').data("DateTimePicker").show()
	},
	'click #newAppointButton': function() { //book a cab button
		newAppointment('12:00 PM', false);
	},
	
	'click #signOutButton': function() { //sign out button
		Meteor.logout();
	}
});
Template.navbar.helpers({
	isCalendar: function() {
		return Router.current().route.getName() === "calendar";
	},
	calendarMonth: function() {
		return moment(Session.get('date')).format("MMMM");
	},
	calendarYear: function() {
		return moment(Session.get('date')).format("YYYY");
	},
	loggedIn: function() {
		return Meteor.userId();
	},
	homeLinkDate: function() {
		
		return moment().format('YYYY-MM-DD');///return date in the format yyyy-mm-dd
	},
	
});

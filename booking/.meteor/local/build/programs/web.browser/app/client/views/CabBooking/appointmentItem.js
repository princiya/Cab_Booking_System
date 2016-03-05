(function(){Template.appointmentItem.helpers({
	appointmentStyle: function() {
		return buildTableItemStyle(this);
	},
	inbetween: function() {
		return inBetween(this);
	},
	itemHighlightClass: function() {
		return highlightItemHelper(this);
	},
	time: function() {
		return moment(this.date).format("h:mm A");
	}
});

}).call(this);

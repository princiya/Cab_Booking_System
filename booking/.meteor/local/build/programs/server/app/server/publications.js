(function(){Meteor.publish("appointmentList", function (date, providerName) {
	if(!this.userId) {
		this.stop();
		return;
	}
	console.log(date);
	var startDate = moment(date).startOf('day').toDate();
	var endDate = moment(date).endOf('day').toDate();
	
	return appointmentList.find({"date": {$gte: startDate, $lt: endDate}, "providerName": providerName});
});
Meteor.publish(null, function() {
	if(!this.userId) {
		this.stop();
		return;
	}
	if (Roles.userIsInRole(this.userId, 'provider')) {
	//	console.log("providerSubscription subscribed by provider");
		return providers.find({name: Meteor.users.findOne(this.userId).providerName});
	}
	//console.log("providerSubscription subscribed by non-provider");
	return providers.find();
});
Meteor.publish("unusualDays", function(thedate) {
	if(!this.userId) {
		this.stop();
		return;
	}
	return unusualDays.find({date:thedate})
});
Meteor.publish("unusualDaysRange", function(dateRangeStart, dateRangeEnd) {
	if(!this.userId) {
		this.stop();
		return;
	}
	return unusualDays.find({date: {$gte: dateRangeStart, $lt: dateRangeEnd}})
});
Meteor.publish(null, function (){ 
	if(!this.userId) {
		this.stop();
		return;
	}
  return Meteor.roles.find({});//publish all roles without sub
});
Meteor.publish(null, function(){
	if(!this.userId) {
		this.stop();
	} else if (Roles.userIsInRole(this.userId, "provider")) {
		return Meteor.users.find(this.userId, {fields: {providerName: 1}});
	}
});
Meteor.publish("userList", function() {
	console.log("userlist caller is admin? " + Roles.userIsInRole(this.userId, 'admin'));
	if(!this.userId || !Roles.userIsInRole(this.userId, 'admin')) {
		this.stop();
		return;
	}
	return Meteor.users.find();
});
Meteor.publish("blockouts", function(date, provider) {
	try {
	//	console.log("blockouts subscribed for:  " + provider);
	}
	catch(e) {
		console.error("blockouts subscribed without provider name");
		//this.stop();
		//return;
	}
	if(!this.userId) {
		this.stop();
		return;
	}
	var startDate = moment(date).startOf('day').toDate();
	var endDate = moment(date).endOf('day').toDate();
	//console.log({date: {$gte: startDate, $lt: endDate}, providerName: provider});
	//console.log(blockouts.find().fetch());
	return blockouts.find({date: {$gte: startDate, $lt: endDate}, providerName: provider});
});
Meteor.publish("singleAppoint", function(id) {
	if(!this.userId) {
		this.stop();
		return;
	}
	console.log('singleAppoint subbed: '+id);
	return appointmentList.find(id);
});
Meteor.publish("singleBlockout", function(id) {
	if(!this.userId) {
		this.stop();
		return;
	}
	return blockouts.find(id);
});
}).call(this);

//# sourceMappingURL=publications.js.map

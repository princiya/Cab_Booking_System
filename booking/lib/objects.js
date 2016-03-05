getProvObject = function(date, providerName) {
	var provObject = unusualDays.findOne({date: date, providerName: providerName});
	if (typeof provObject === "undefined") {
		provObject = providers.findOne({name: providerName});
	}
	return provObject;
};

getBlockouts = function(providerName, date) {
	//Returns a complete list of blockouts for a given provider and day.
	var day = moment(date).format("dddd").toLowerCase();
	if (unusualDays.findOne({date: date})) {
		var providerBlockouts = []
	} else {
		try {
			providerBlockouts = providers.findOne({name: providerName}, {fields: {"blockouts": 1}}).blockouts;
		} catch(e) {}//fails if no blockout object on the provider. this is normal.

	}
	var singleDayBlockouts = blockouts.find(
		{date:
			{$gte: 	moment(date).startOf('day').toDate(),
			$lt: moment(date).endOf('day').toDate()},
			providerName: providerName}).fetch();

	var ret = _.union(providerBlockouts, singleDayBlockouts);
	ret = _.filter(ret, function(block) {
		if (typeof block !== "undefined" && !block.hasOwnProperty("day")) {
			return true;//this means the blockout is custom for today, thus kept
		} else if (typeof block !== "undefined") {
			return (block.day === day || block.day === "all");
		}//this means the blockout is a recurring one for this provider, so kept if
		//is an everyday one or for this day of the week.
		return false;
	});
	//console.log(ret);
	return ret;
};

checkDate = function(thisobj, isAppnt) {
	//Checks a given date falls within the bounds of the current day and does not overlap
	//appointments or blockouts

	
	//////////////////////////////////////////////////
	/////////////CHECKING APPOINTMENT OVERLAP
	/////////////////////////////////////////////////
	var currentAppoint = thisobj.value;
	var currentAppointEnd = moment(currentAppoint).add(parseInt(thisobj.field("length").value), 'minutes');
	var currentRange = moment(currentAppoint).twix(currentAppointEnd);
	var queryStart = moment(thisobj.value).startOf('day').toDate();
	var queryEnd = moment(thisobj.value).endOf('day').toDate();
	//console.log(JSON.stringify({date: {$gte: queryStart, $lt:queryEnd},providerName: thisobj.field("providerName").value}));
	var appoints = appointmentList.find({date: {$gte: queryStart, $lt:queryEnd},providerName: thisobj.field("providerName").value}).fetch();
	var ret;
	_.each(appoints, function(comparedAppoint) {
		var comparedRange = moment(comparedAppoint.date)
			.twix(moment(comparedAppoint.date)
				.add(comparedAppoint.length, "minutes"));

		//console.log("Comparing " + currentRange.format() + " with " + comparedRange.format());
		var overlaps = currentRange.overlaps(comparedRange);
		if (overlaps) {
			if (Meteor.isServer) {
				if (!(thisobj.docId === comparedAppoint._id)) {
					console.log("different appointments clashing");
					ret = "overlappingDates";
					return "overlappingDates";
				}
			}
			else if (Meteor.isClient) {
				if (!(Session.get("currentlyEditingDoc") === comparedAppoint._id)) {
					console.log("different appointments clashing");
					ret = "overlappingDates";
					return "overlappingDates";
				}
			}
		}
	});
	if (typeof ret === "string") {
		return ret;
	}
	
	
};


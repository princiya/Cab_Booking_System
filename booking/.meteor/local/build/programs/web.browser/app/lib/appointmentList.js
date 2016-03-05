(function(){appointmentList = new Meteor.Collection("appointmentList");
appointmentList.attachSchema(new SimpleSchema({
	firstname: {
		type: String,
		label: "First Name",
		max: 100
	},
	lastname: {
		type: String,
		label: "Last Name",
		max: 100
	},
	phone: {
		type: String,
		label: "Phone Number",
		optional: true
	},
	notes: {
		type: String,
		label: "Address",
		optional: true
	},
	date: {
		type: Date,
		label: " Start Time",
		index: true,
		custom: function() {
			return checkDate(this, true);
		}
	},
	length: {
		type: Number,
		label: "Cab booking duration",
		min: 5,
		
		autoValue: function() {
			if (typeof this.value == 'undefined') {
				var cleanDate = moment(this.field('date').value).startOf('day').toDate();
				var provObject = getProvObject(cleanDate, this.field('providerName').value);
				return provObject.appointmentLength;
			}
		},
		custom: function(){
			if (this.value % 5 !== 0){
				return "multiple";
			}
		}
	},
	providerName: {
		type: String,
		label: "Provider Name",
		autoform: {
			omit: true
		}
	},
	createdAt: {
		type: Date,
		autoform: {
			omit: true
		},
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			} else if (this.isUpsert) {
				return {$setOnInsert: new Date()};
			} else {
				this.unset();
			}
		}
	}
}));
appointmentList.simpleSchema().messages({
	
	multiple: "[value] must be a multiple of 5.", 
	overlappingDates:"Time slot overlap. Try later",
	overlappingBlockout:"That time overlaps a blockout.",
	dateOutOfBounds: "Appointment time must be within [value] o'clock."
});

}).call(this);

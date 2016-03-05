blockouts = new Meteor.Collection('blockouts');

blockouts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		defaultValue: "Break",
	},
	date: {
		type: Date,
		label: "Blockout Date",
		custom: function() {
			return checkDate(this, false);
		}
	},
	length: {
		type: Number,
		label: "Length",
		min:5,
		defaultValue: 15,
		custom: function(){
			if (this.value % 5 !== 0){
				return "mod5";
			}
		}
	},
	providerName: {
		type: String,
		label: "Provider Name"
	}
}));
blockouts.simpleSchema().messages({
	
	multiple: "[value] must be a multiple of 5.",
	overlappingDates:"That time overlaps a booked slot! Try Later",
	overlappingBlockout:"That time overlaps another blockout.",
	dateOutOfBounds: "Blockout time must be within [value] o'clock."
});

(function(){Meteor.startup(function() {
	                                                 // 125
	Meteor.startup(function () {                                          // 126
		process.env.MAIL_URL = 'smtp://aaaaaaa%40gmail.com:'+encodeURIComponent('password')+'@smtp.gmail.com:465';  //environment variable

        Accounts.emailTemplates.from = "Verification Link";  //displays this to the receiver of the mail
	});                                                                   

	
});

}).call(this);

//# sourceMappingURL=startup.js.map

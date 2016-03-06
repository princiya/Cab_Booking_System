Meteor.startup(function() {
	                                                 // 125
	Meteor.startup(function () {                                          // 126
		process.env.MAIL_URL = 'smtp://username:passoword@smtp.gmail.com:465';  //environment variable
        //if your gmail email address is xyz@gmail.com, then the username to be entered here is only xyz!
        Accounts.emailTemplates.from = "Verification Link";  //displays this to the receiver of the mail
	});                                                                   

	
});

Meteor.methods({
    newUser: function () {
        if (Roles.userIsInRole(this.userId, 'admin')) {
            return Accounts.createUser({
                username: "newuser",
                email: "fakeEmail@example.com",
                roles: ["booker"]
                
            })
        }
    },
    deleteUser: function (id) {
        if (Roles.userIsInRole(this.userId, 'admin')) {
            return Meteor.users.remove(id);
        }
    },
    forcePassword: function (userID, pass) {
        if (Roles.userIsInRole(this.userId, 'admin')) {
            return Accounts.setPassword(userID, pass);
        }
    },
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
        Email.send({
          to: to,
          from: from,
          subject: subject,
          text: text
        });
    }
});

//TODO: Define a method which removes a provider and ALL dependants

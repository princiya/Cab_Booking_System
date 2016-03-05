(function(){
Template.__checkName("registration");
Template["registration"] = new Template("Template.registration", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("Meteor.users"),
      id: Spacebars.call("registrationForm")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {
      return [ "\n		", HTML.FIELDSET("\n			", HTML.LEGEND("Register a new user"), "\n				", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("username")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n				", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("emails")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n				", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("password"),
          type: Spacebars.call("password")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n				", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("roles"),
          options: Spacebars.call("auto")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n				", HTML.BUTTON({
        type: "submit",
        "class": "btn btn-primary",
        id: "createUser"
      }, "Register"), "\n		"), "\n	" ];
    });
  });
}));

}).call(this);

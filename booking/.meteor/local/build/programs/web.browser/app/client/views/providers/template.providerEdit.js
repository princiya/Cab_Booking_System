(function(){
Template.__checkName("providerEdit");
Template["providerEdit"] = new Template("Template.providerEdit", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call("providers"),
      doc: Spacebars.call(view.lookup("editingProvider")),
      id: Spacebars.call("updateProviderForm"),
      type: Spacebars.call("update")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {
      return [ "\n			", HTML.FIELDSET("\n			", HTML.Comment(" <h6>New appointment for {{currentDate}}</h6> "), "\n			", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("name")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n			", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("startTime")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n			", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("endTime")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n			", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("appointmentLength"),
          step: Spacebars.call(5)
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n			", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("blockouts")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n			", HTML.BUTTON({
        type: "submit",
        "class": "btn btn-primary",
        id: "saveAppointChanges"
      }, "Save changes"), "\n		"), "\n	" ];
    });
  });
}));

}).call(this);

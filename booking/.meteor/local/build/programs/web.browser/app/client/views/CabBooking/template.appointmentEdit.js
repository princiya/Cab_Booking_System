(function(){
Template.__checkName("appointmentEdit");
Template["appointmentEdit"] = new Template("Template.appointmentEdit", (function() {
  var view = this;
  return HTML.DIV({
    id: "appointmentEdit"
  }, "\n		", Spacebars.include(view.lookupTemplate("insertAppointmentForm")), "\n	");
}));

Template.__checkName("insertAppointmentForm");
Template["insertAppointmentForm"] = new Template("Template.insertAppointmentForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      collection: Spacebars.call(view.lookup("appointmentList")),
      doc: Spacebars.call(view.lookup("currentDoc")),
      id: Spacebars.call("insertAppointmentFormInner"),
      type: Spacebars.call(view.lookup("currentType"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {
      return [ "\n	", HTML.H4({
        "class": "title"
      }, "Cab Booking System"), "\n	", HTML.DIV({
        "class": "alert ",
        style: "display:none;",
        id: "insertSuccessAlert",
        role: "alert"
      }), "\n	", HTML.FIELDSET("\n		", HTML.H6("Book your cab here!!!"), "\n		", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("firstname")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n        ", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("lastname")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n		", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("date"),
          type: Spacebars.call("timePicker")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n		", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("phone")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n		", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("notes"),
          rows: Spacebars.call(2)
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n		", Blaze._TemplateWith(function() {
        return {
          name: Spacebars.call("length"),
          "default": Spacebars.call(15),
          step: Spacebars.call(5)
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("afQuickField"));
      }), "\n	"), "\n	", HTML.DIV({
        "class": "footer",
        style: "height:50px;"
      }, "\n		", HTML.BUTTON({
        type: "button",
        "class": "btn btn-default pull-left",
        id: "closeBookingEditor"
      }, "Close"), "\n		", HTML.BUTTON({
        type: "button",
        "class": function() {
          return [ "btn btn-danger pull-left ", Spacebars.mustache(view.lookup("deleteButtonClass")) ];
        },
        id: "deleteAppointment"
      }, "Delete"), "\n		", HTML.BUTTON({
        type: "submit",
        "class": "btn btn-primary pull-right",
        id: "saveAppointChanges"
      }, "Book My Cab"), "\n	"), "\n	" ];
    });
  });
}));

}).call(this);

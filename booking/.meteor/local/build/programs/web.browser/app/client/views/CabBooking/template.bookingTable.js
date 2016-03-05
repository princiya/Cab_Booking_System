(function(){
Template.__checkName("bookingTable");
Template["bookingTable"] = new Template("Template.bookingTable", (function() {
  var view = this;
  return HTML.DIV({
    id: "bookingTable"
  }, HTML.Raw('\n		<!-- <div class="row">\n			<div class="" -->\n		'), HTML.H2({
    "class": "dayDisplay pull-left"
  }, Blaze.View("lookup:day", function() {
    return Spacebars.mustache(view.lookup("day"));
  })), "\n		", HTML.H2({
    "class": "pull-right"
  }, Blaze.View("lookup:notes", function() {
    return Spacebars.mustache(view.lookup("notes"));
  })), HTML.Raw("\n		<!-- </div> -->\n		"), HTML.UL({
    "class": "nav nav-tabs",
    role: "tablist"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("noneSelected"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "alert alert-info",
      role: "alert"
    }, "Pick a provider to display appointments."), "\n            " ];
  }), "\n			", Blaze.Each(function() {
    return Spacebars.call(view.lookup("providerNames"));
  }, function() {
    return [ "\n				", HTML.LI({
      "class": function() {
        return Spacebars.mustache(view.lookup("selected"));
      }
    }, HTML.A({
      "data-name": function() {
        return Spacebars.mustache(view.lookup("name"));
      },
      "class": "providerTab",
      href: "#"
    }, "Booking Details\n					")), "\n			" ];
  }), "\n		"), "\n		", HTML.DIV(HTML.Attrs({
    id: "bookingTableWrapper"
  }, function() {
    return Spacebars.attrMustache(view.lookup("bookingTableWrapperStyle"));
  }), "\n			", HTML.TABLE({
    "class": "table"
  }, "\n				", HTML.THEAD("\n					", HTML.TR("\n						", HTML.TH("\n							Time\n						"), "\n						", HTML.TH("\n							Booking Status\n						"), "\n					"), "\n				"), "\n				", HTML.TBODY("\n					", Blaze.Each(function() {
    return Spacebars.call(view.lookup("times"));
  }, function() {
    return [ "\n						", Spacebars.include(view.lookupTemplate("timeRow")), "\n					" ];
  }), "\n\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("blockouts"));
  }, function() {
    return [ "\n                        ", Spacebars.include(view.lookupTemplate("blockoutItem")), "\n                    " ];
  }), "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("appointments"));
  }, function() {
    return [ "\n                        ", Spacebars.include(view.lookupTemplate("appointmentItem")), "\n                    " ];
  }), "\n\n				"), "\n\n			"), "\n		"), "\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("notPrintout"));
  }, function() {
    return [ "\n		", HTML.DIV({
      "class": "pull-right",
      id: "customTimeChanger"
    }, "\n			", HTML.BUTTON({
      type: "button",
      style: function() {
        return Spacebars.mustache(view.lookup("buttonStyle"));
      },
      id: "customTimesButton",
      "class": "btn"
    }, "Set Custom Times"), "\n			", Blaze.If(function() {
      return Spacebars.call(view.lookup("unusualDays"));
    }, function() {
      return [ "\n				", Blaze._TemplateWith(function() {
        return {
          collection: Spacebars.call("unusualDays"),
          id: Spacebars.call("changeDayTimes"),
          doc: Spacebars.call(view.lookup("todaysUnusualTimes")),
          type: Spacebars.call("update"),
          autosave: Spacebars.call(true),
          "class": Spacebars.call("form-inline")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("autoForm"), function() {
          return [ "\n					", HTML.DIV({
            "class": "form-group"
          }, "\n					", Blaze._TemplateWith(function() {
            return {
              name: Spacebars.call("startTime"),
              style: Spacebars.call("width: 75px")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("afQuickField"));
          }), "\n					", Blaze._TemplateWith(function() {
            return {
              name: Spacebars.call("endTime"),
              style: Spacebars.call("width: 75px")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("afQuickField"));
          }), "\n					", Blaze._TemplateWith(function() {
            return {
              name: Spacebars.call("appointmentLength"),
              step: Spacebars.call(5),
              style: Spacebars.call("width: 75px")
            };
          }, function() {
            return Spacebars.include(view.lookupTemplate("afQuickField"));
          }), "\n					\n					\n					"), "\n				" ];
        });
      }), "\n			" ];
    }), "\n		"), "\n		" ];
  }), "\n	");
}));

Template.__checkName("timeRow");
Template["timeRow"] = new Template("Template.timeRow", (function() {
  var view = this;
  return HTML.TR({
    "class": function() {
      return [ "timeRow ", Spacebars.mustache(view.lookup("rowHighlightClass")) ];
    }
  }, "\n		", HTML.TD({
    "class": "rowHeader"
  }, Blaze.View("lookup:time", function() {
    return Spacebars.mustache(view.lookup("time"));
  })), "\n		", HTML.TD({
    id: function() {
      return Spacebars.mustache(view.lookup("rowTimeId"));
    },
    "class": "rowContent"
  }), "\n	");
}));

}).call(this);

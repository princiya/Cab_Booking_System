(function(){
Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("singlePageMasterLayout");
Template["singlePageMasterLayout"] = new Template("Template.singlePageMasterLayout", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n        ", Spacebars.include(view.lookupTemplate("navbar")), "\n        ", HTML.DIV({
    id: "main"
  }, "\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n        "), "\n    ");
}));

Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar navbar-default",
    role: "navigation"
  }, "\n        ", HTML.DIV({
    "class": "container-fluid"
  }, "\n        ", HTML.DIV({
    "class": "navbar-header"
  }, "\n            ", HTML.Raw('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>'), "\n            ", HTML.A({
    "class": "navbar-brand",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "bookingTable", Spacebars.kw({
        date: view.lookup("homeLinkDate"),
        providerName: view.lookup("homeLinkProv")
      }));
    }
  }, " Cab Booking"), "\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("loggedIn"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      "class": "collapse navbar-collapse",
      id: "bs-example-navbar-collapse-1"
    }, "\n            ", HTML.UL({
      "class": "nav navbar-nav"
    }, "\n                ", HTML.LI(HTML.A({
      href: function() {
        return Spacebars.mustache(view.lookup("pathFor"), "calendar", Spacebars.kw({
          month: view.lookup("calendarMonth"),
          year: view.lookup("calendarYear")
        }));
      }
    }, "Calendar")), "\n                \n                \n            "), "\n            ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("isCalendar"));
    }, function() {
      return [ "\n                ", HTML.FORM({
        "class": "navbar-form navbar-left"
      }, "\n                    ", Spacebars.include(view.lookupTemplate("datepicker")), "\n                "), "\n            " ];
    }), "\n            ", HTML.FORM({
      "class": "navbar-form navbar-right"
    }, "\n                \n                ", HTML.BUTTON({
      type: "button",
      id: "newAppointButton",
      "class": "btn btn-primary"
    }, "Book A Cab"), "\n             ", HTML.BUTTON({
      type: "button",
      id: "signOutButton",
      "class": "btn"
    }, "Sign Out"), "\n            "), "\n\n           \n        "), "\n        " ];
  }), "\n        "), "\n    ");
}));

}).call(this);

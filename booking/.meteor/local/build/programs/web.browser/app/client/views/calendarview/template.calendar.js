(function(){
Template.__checkName("calendar");
Template["calendar"] = new Template("Template.calendar", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "calendarHeader"
  }, "\n        ", HTML.DIV({
    role: "presentation",
    id: "prevMonth"
  }, "\n            ", HTML.BUTTON({
    "class": "btn btn-default btn-primary",
    role: "button"
  }, HTML.Raw('<span class="glyphicon glyphicon-arrow-left"></span>'), " ", Blaze.View("lookup:prevmonth", function() {
    return Spacebars.mustache(view.lookup("prevmonth"));
  })), "\n        "), "\n        ", HTML.DIV({
    role: "presentation"
  }, "\n            ", HTML.DIV({
    id: "centre"
  }, "\n                ", HTML.H2({
    id: "month",
    "class": ""
  }, Blaze.View("lookup:dateString", function() {
    return Spacebars.mustache(view.lookup("dateString"));
  })), "\n            "), "\n        "), "\n        ", HTML.DIV({
    role: "presentation",
    id: "nextMonth"
  }, "\n            ", HTML.BUTTON({
    "class": "btn btn-default btn-primary",
    role: "button"
  }, HTML.Raw('<span class="glyphicon glyphicon-arrow-right"></span>'), " ", Blaze.View("lookup:nextmonth", function() {
    return Spacebars.mustache(view.lookup("nextmonth"));
  })), "\n        "), "\n    "), "\n    ", HTML.DIV({
    id: "thecalendar"
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("innercalendar"),
      timezone: Spacebars.call("Pacific/Auckland"),
      header: Spacebars.call(false)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("fullcalendar"));
  }), "\n    ") ];
}));

}).call(this);

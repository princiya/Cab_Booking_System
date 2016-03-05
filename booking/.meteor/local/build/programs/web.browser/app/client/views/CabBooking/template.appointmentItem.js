(function(){
Template.__checkName("appointmentItem");
Template["appointmentItem"] = new Template("Template.appointmentItem", (function() {
  var view = this;
  return HTML.DIV({
    "class": function() {
      return [ "tableItem appointmentItem bg-primary ", Spacebars.mustache(view.lookup("itemHighlightClass")) ];
    },
    "data-id": function() {
      return Spacebars.mustache(view.lookup("_id"));
    },
    style: function() {
      return Spacebars.mustache(view.lookup("appointmentStyle"));
    }
  }, HTML.Raw('\n		<h5 class="tableItemData"><span class="glyphicon glyphicon-user"></span> \n			Cab Booked!! </h5>\n		'), HTML.P({
    "class": "tableItemData"
  }, HTML.Raw('<span class="glyphicon glyphicon-time"></span>'), "\n			", Blaze.View("lookup:time", function() {
    return Spacebars.mustache(view.lookup("time"));
  }), " - ", Blaze.View("lookup:length", function() {
    return Spacebars.mustache(view.lookup("length"));
  }), " minutes"), "\n		\n			\n		\n	");
}));

}).call(this);

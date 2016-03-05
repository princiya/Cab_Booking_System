(function(){
Template.__checkName("afInputTimePicker");
Template["afInputTimePicker"] = new Template("Template.afInputTimePicker", (function() {
  var view = this;
  return HTML.DIV({
    "class": "input-group date",
    id: "datetimepicker"
  }, "\n      ", HTML.INPUT(HTML.Attrs({
    type: "text",
    "class": "form-control aftimecontrol"
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));
  })), HTML.Raw('\n      <span class="input-group-addon">\n          <span class="glyphicon glyphicon-time">\n          </span>\n      </span>\n    '));
}));

}).call(this);

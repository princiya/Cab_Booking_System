(function(){
Template.__checkName("datepicker");
Template["datepicker"] = new Template("Template.datepicker", (function() {
  var view = this;
  return HTML.Raw('<div class="form-group">\n        <button type="button" id="prevDay" class="btn btn-default glyphicon glyphicon-chevron-left"></button>\n        <div class="input-group date" id="datetimepicker1">\n            <input type="text" id="dateField" class="form-control">\n        </div>\n        <button type="button" id="nextDay" class="btn btn-default glyphicon glyphicon-chevron-right"></button>\n    </div>');
}));

}).call(this);

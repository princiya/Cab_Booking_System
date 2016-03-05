(function(){
Template.__checkName("sideEditMasterTemplate");
Template["sideEditMasterTemplate"] = new Template("Template.sideEditMasterTemplate", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n			", Spacebars.include(view.lookupTemplate("navbar")), "\n		", HTML.DIV({
    id: "main"
  }, "\n			", HTML.DIV({
    "class": "row"
  }, "\n				", HTML.DIV({
    "class": "col-md-4",
    id: "editorWrapper"
  }, "\n					", Spacebars.include(view.lookupTemplate("yield")), "\n				"), "\n				", HTML.DIV({
    "class": "col-md-8"
  }, "\n					", Blaze._TemplateWith(function() {
    return "right";
  }, function() {
    return Spacebars.include(view.lookupTemplate("yield"));
  }), "\n				"), "\n			"), "\n		"), "\n	");
}));

}).call(this);

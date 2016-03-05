(function(){
Template.__checkName("loginPage");
Template["loginPage"] = new Template("Template.loginPage", (function() {
  var view = this;
  return HTML.DIV({
    id: "loginForm",
    "class": "container"
  }, " \n	", HTML.P("\n	", Spacebars.include(view.lookupTemplate("atForm")), " \n	"), "\n	");
}));

}).call(this);

(function(){
Template.__checkName("providerList");
Template["providerList"] = new Template("Template.providerList", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row"
  }, "\n		", HTML.DIV({
    "class": "col-md-4"
  }, "\n			", HTML.DIV({
    "class": "list-group"
  }, "\n				", Blaze.Each(function() {
    return Spacebars.call(view.lookup("providerList"));
  }, function() {
    return [ "\n				", HTML.A({
      href: "#",
      "data-name": function() {
        return Spacebars.mustache(view.lookup("name"));
      },
      "class": "list-group-item providerName"
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    }), "\n					", HTML.BUTTON({
      "class": "providerDeleteButton btn btn-danger pull-right"
    }, "\n						Delete")), "\n				" ];
  }), "\n			"), "\n			", HTML.Raw('<button id="newProviderButton" class="btn btn-primary">New Provider</button>'), "\n		"), "\n		", HTML.DIV({
    "class": "col-md-8"
  }, Spacebars.include(view.lookupTemplate("providerEdit"))), "\n	");
}));

}).call(this);

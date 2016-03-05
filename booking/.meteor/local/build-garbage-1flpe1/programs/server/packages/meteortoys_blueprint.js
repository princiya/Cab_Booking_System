(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_blueprint/config/config.js                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
ToyKit = {                                                           // 1
	name:     "Blueprint",                                              // 2
	version:  "1.0.0",                                                  // 3
	template: "MeteorToys_template",                                    // 4
	ToyKit:   "1.0.0"                                                   // 5
};                                                                   // 6
                                                                     // 7
Meteor.startup(function() {                                          // 8
                                                                     // 9
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;               // 10
                                                                     // 11
});                                                                  // 12
///////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_blueprint/server/main.js                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:blueprint'] = {
  ToyKit: ToyKit
};

})();

//# sourceMappingURL=meteortoys_blueprint.js.map

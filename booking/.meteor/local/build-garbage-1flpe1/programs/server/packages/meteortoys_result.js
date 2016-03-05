(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_result/server/main.js                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
///////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_result/config/config.js                       //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
ToyKit = {                                                           // 1
	name:     "Result",                                                 // 2
	version:  "1.0.0",                                                  // 3
	template: "MeteorToys_result",                                      // 4
	ToyKit:   "1.0.0"                                                   // 5
};                                                                   // 6
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:result'] = {
  ToyKit: ToyKit
};

})();

//# sourceMappingURL=meteortoys_result.js.map

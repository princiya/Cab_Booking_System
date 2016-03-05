(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var ToyKit, MeteorToys;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_hotreload/config/config.js                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
ToyKit = {                                                           // 1
	name:     "Hot Reload",                                             // 2
	version:  "1.0.0",                                                  // 3
	template: "MeteorToys_reload"                                       // 4
};                                                                   // 5
                                                                     // 6
Meteor.startup(function() {                                          // 7
                                                                     // 8
	MeteorToys = Package["meteortoys:toykit"].MeteorToys;               // 9
                                                                     // 10
	// MeteorToys.register({                                            // 11
	// 	package:  "meteortoys:hotreload",                               // 12
	// 	name:     "Hot Reload",                                         // 13
	// 	template: "MeteorToys_reload",                                  // 14
	// 	core:     true                                                  // 15
	// })                                                               // 16
                                                                     // 17
});                                                                  // 18
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:hotreload'] = {
  ToyKit: ToyKit
};

})();

//# sourceMappingURL=meteortoys_hotreload.js.map

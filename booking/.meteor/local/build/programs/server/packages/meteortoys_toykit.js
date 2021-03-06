(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;

/* Package-scope variables */
var MeteorToysData, collectionObjects, collections, MeteorToysRegistry, MeteorToysRegistryData, toyName, packageList, packageName, key, credz;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_toykit/lib/collections.js                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0x97e4=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x54\x68\x72\x6F\x74\x74\x6C\x65","\x61\x6C\x6C\x6F\x77","\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x41\x75\x74\x6F\x50\x75\x62","\x45\x6D\x61\x69\x6C","\x52\x65\x73\x75\x6C\x74"];MeteorToysData={"\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65": new Mongo.Collection(_0x97e4[0]),"\x4A\x65\x74\x53\x65\x74\x74\x65\x72": new Mongo.Collection(_0x97e4[1]),"\x4D\x6F\x6E\x67\x6F\x6C": new Mongo.Collection(_0x97e4[2]),"\x41\x75\x74\x6F\x50\x75\x62": new Mongo.Collection(_0x97e4[3]),"\x45\x6D\x61\x69\x6C": new Mongo.Collection(_0x97e4[4]),"\x52\x65\x73\x75\x6C\x74": new Mongo.Collection(_0x97e4[5]),"\x54\x68\x72\x6F\x74\x74\x6C\x65": new Mongo.Collection(_0x97e4[6])};MeteorToysData[_0x97e4[8]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[9]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[10]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});if(Meteor[_0x97e4[11]]){MeteorToysData[_0x97e4[12]]= new Mongo.Collection(_0x97e4[13])};MeteorToysData[_0x97e4[14]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[15]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[16]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});
///////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/meteortoys_toykit/server/main.js                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var _0xafe5=["\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x67\x65\x74\x41\x6C\x6C","\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x6E\x61\x6D\x65","\x66\x69\x6E\x64","\x67\x65\x74","\x70\x75\x73\x68","\x6D\x61\x70","\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x41\x75\x74\x6F\x50\x75\x62","\x54\x68\x72\x6F\x74\x74\x6C\x65","\x45\x6D\x61\x69\x6C","\x52\x65\x73\x75\x6C\x74","\x4D\x6F\x6E\x67\x6F\x6C","\x70\x75\x62\x6C\x69\x73\x68","\x63\x6F\x72\x65","\x61\x64\x64\x6F\x6E","\x72\x65\x67\x69\x73\x74\x65\x72","\x74\x65\x6D\x70\x6C\x61\x74\x65","\x6F\x66\x66\x69\x63\x69\x61\x6C","\x73\x63\x61\x6E","\x6B\x65\x79\x73","\x6C\x65\x6E\x67\x74\x68","\x6C\x61\x73\x74\x49\x6E\x64\x65\x78\x4F\x66","\x54\x6F\x79\x4B\x69\x74","\x73\x74\x61\x72\x74\x53\x63\x61\x6E","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x61\x64\x64\x6F\x6E\x3A","\x73\x74\x61\x72\x74\x75\x70","\x6D\x65\x74\x68\x6F\x64\x73","\x53\x58\x47\x57\x4C\x5A\x50\x44\x4F\x4B","\x46\x49\x56\x55\x48\x4A\x59\x54\x51\x42\x4E\x4D\x41\x43\x45\x52\x78\x73\x77\x67\x7A\x6C\x64\x70\x6B\x6F\x69\x66\x75\x76","\x6A\x68\x74\x79\x62\x71\x6D\x6E\x63\x61\x72\x65","","\x63\x68\x61\x72\x41\x74","\x61","\x7A","\x41","\x5A","\x69\x6E\x64\x65\x78\x4F\x66","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x69\x6E\x64\x4F\x6E\x65","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x65\x6D\x61\x69\x6C","\x70\x61\x73\x73\x77\x6F\x72\x64","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x79\x65\x73"];if(Package[_0xafe5[0]]){}else {Meteor[_0xafe5[16]](_0xafe5[1],function(_0x9911x1){check(_0x9911x1,Match.Any);if(_0x9911x1){collectionObjects=Mongo[_0xafe5[3]][_0xafe5[2]](),collections=[];collectionObjects[_0xafe5[8]](function(_0x9911x2){if(_0x9911x2[_0xafe5[4]]){collections[_0xafe5[7]](Mongo[_0xafe5[3]][_0xafe5[6]](_0x9911x2[_0xafe5[4]])[_0xafe5[5]]())}});return collections;}else {return [MeteorToysData[_0xafe5[9]][_0xafe5[5]]({},{limit:6}),MeteorToysData[_0xafe5[10]][_0xafe5[5]](),MeteorToysData[_0xafe5[11]][_0xafe5[5]](),MeteorToysData[_0xafe5[12]][_0xafe5[5]](),MeteorToysData[_0xafe5[13]][_0xafe5[5]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":1},limit:15}),MeteorToysData[_0xafe5[14]][_0xafe5[5]]({},{sort:{"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":-1},limit:15}),MeteorToysData[_0xafe5[15]][_0xafe5[5]]({},{sort:{"\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65":1},limit:15})]};})};MeteorToysRegistry={};MeteorToysRegistryData={};MeteorToysRegistryData[_0xafe5[17]]= new Object();MeteorToysRegistryData[_0xafe5[18]]= new Object();MeteorToysRegistry[_0xafe5[19]]=function(_0x9911x3,_0x9911x4){toyName=_0x9911x3[_0xafe5[20]];if(_0x9911x4===_0xafe5[21]){MeteorToysRegistryData[_0xafe5[17]][toyName]=_0x9911x3}else {MeteorToysRegistryData[_0xafe5[18]][toyName]=_0x9911x3};};MeteorToysRegistry[_0xafe5[22]]=function(_0x9911x5,_0x9911x4){packageList=Object[_0xafe5[23]](Package);for(var _0x9911x6=0;_0x9911x6<packageList[_0xafe5[24]];_0x9911x6++){packageName=packageList[_0x9911x6];if(packageName[_0xafe5[25]](_0x9911x5,0)===0){if(Package[packageName][_0xafe5[26]]){MeteorToysRegistry[_0xafe5[19]](Package[packageName].ToyKit,_0x9911x4)}};};};MeteorToysRegistry[_0xafe5[27]]=function(){MeteorToysRegistry[_0xafe5[22]](_0xafe5[28],_0xafe5[21]);MeteorToysRegistry[_0xafe5[22]](_0xafe5[29],_0xafe5[18]);};Meteor[_0xafe5[30]](function(){MeteorToysRegistry[_0xafe5[27]]()});Meteor[_0xafe5[31]]({MeteorToysRegistry:function(){return MeteorToysRegistryData}});Meteor[_0xafe5[31]]({MeteorToys:function(_0x9911x7,_0x9911x8){check(_0x9911x7,Match.Any);check(_0x9911x8,Match.Any);key=_0xafe5[32];if(_0x9911x7){if(_0x9911x7===_0x9911x8){return false}else {key+=_0xafe5[33]}}else {key+=_0xafe5[33]};key+=_0xafe5[34];function _0x9911x9(_0x9911xa){_0x9911xa=decodeURIComponent(_0x9911xa);var _0x9911xb=_0xafe5[35];var _0x9911xc;for(var _0x9911x6=_0x9911xa[_0xafe5[24]]-1;_0x9911x6>=0;_0x9911x6--){_0x9911xc=_0x9911xa[_0xafe5[36]](_0x9911x6);_0x9911xb+=(_0x9911xc>=_0xafe5[37]&&_0x9911xc<=_0xafe5[38]||_0x9911xc>=_0xafe5[39]&&_0x9911xc<=_0xafe5[40])?String[_0xafe5[42]](65+key[_0xafe5[41]](_0x9911xc)%26):_0x9911xc;};return _0x9911xb;}if( typeof _0x9911x7===_0xafe5[43]){if(Package[_0xafe5[47]][_0xafe5[46]][_0xafe5[45]][_0xafe5[44]]()){credz=Package[_0xafe5[47]][_0xafe5[46]][_0xafe5[45]][_0xafe5[44]]();var _0x9911xd=credz[_0xafe5[48]],_0x9911xe=_0x9911x9(credz[_0xafe5[49]]);if(_0x9911xd===null){return false}else {if(_0x9911xd[_0xafe5[50]]()===_0x9911xe){return true}};}}else {if( typeof _0x9911x7===_0xafe5[43]){}else {_0x9911xd=_0x9911x7[_0xafe5[50]](),_0x9911xe=_0x9911x9(_0x9911x8);if(_0x9911xd===_0x9911xe){return _0xafe5[51]};}};}});
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:toykit'] = {
  MeteorToysData: MeteorToysData
};

})();

//# sourceMappingURL=meteortoys_toykit.js.map

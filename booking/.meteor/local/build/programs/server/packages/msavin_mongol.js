(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var MeteorToysDict, Mongol, newId, targetCollection, trashDocument, revisedDocument, collectionObjects, collections;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/lib/common.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Grab the Dict                                                                                                       // 1
MeteorToysDict = Package["meteortoys:toykit"].MeteorToys;                                                              // 2
                                                                                                                       // 3
// Create object and reserve name across the package                                                                   // 4
if (Mongol === undefined) {                                                                                            // 5
  Mongol = {};                                                                                                         // 6
}                                                                                                                      // 7
                                                                                                                       // 8
Mongol = {                                                                                                             // 9
  'getDocumentUpdate': function (data) {                                                                               // 10
    var elementID = 'MongolDoc_' + data,                                                                               // 11
      newData = document.getElementById(elementID).textContent;                                                        // 12
                                                                                                                       // 13
    return newData;                                                                                                    // 14
  },                                                                                                                   // 15
  'error': function (data) {                                                                                           // 16
    switch (data) {                                                                                                    // 17
      case "json.parse":                                                                                               // 18
        alert("There is an error with your JSON syntax.\n\nNote: keys and string values need double quotes.");         // 19
        break;                                                                                                         // 20
      case "duplicate":                                                                                                // 21
        alert("Strange, there was an error duplicating your document.");                                               // 22
        break;                                                                                                         // 23
      case "remove":                                                                                                   // 24
        alert("Strange, there was an error removing your document.");                                                  // 25
        break;                                                                                                         // 26
      case "insert":                                                                                                   // 27
        alert("Strange, there was an error inserting your document.");                                                 // 28
        break;                                                                                                         // 29
      case "update":                                                                                                   // 30
        alert("There was an error updating your document. Please review your changes and try again.");                 // 31
        break;                                                                                                         // 32
      default:                                                                                                         // 33
        return "Unknown Error";                                                                                        // 34
        break;                                                                                                         // 35
    }                                                                                                                  // 36
  },                                                                                                                   // 37
  'parse': function (data) {                                                                                           // 38
      var newObject = null;                                                                                            // 39
      try {                                                                                                            // 40
        var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;                // 41
        var dateParser = function (key, value) {                                                                       // 42
          if (_.isString(value)) {                                                                                     // 43
            var a = reISO.exec(value);                                                                                 // 44
            if (a) {                                                                                                   // 45
              return new Date(value);                                                                                  // 46
            }                                                                                                          // 47
          }                                                                                                            // 48
          return value;                                                                                                // 49
        }                                                                                                              // 50
        newObject = JSON.parse(data, dateParser);                                                                      // 51
      }                                                                                                                // 52
      catch (error) {                                                                                                  // 53
        Mongol.error("json.parse");                                                                                    // 54
      }                                                                                                                // 55
      return newObject;                                                                                                // 56
  },                                                                                                                   // 57
  'detectCollections': function () {                                                                                   // 58
    if (MeteorToysDict.get('Mongol') === undefined) {                                                                  // 59
        // Note: this returns the actual mongo collection name                                                         // 60
        var collections = _.map(Mongo.Collection.getAll(), function (collection) {                                     // 61
        return collection.name;                                                                                        // 62
      });                                                                                                              // 63
                                                                                                                       // 64
      var defaults = {                                                                                                 // 65
        'collections': collections,                                                                                    // 66
      };                                                                                                               // 67
                                                                                                                       // 68
      MeteorToysDict.set("Mongol", defaults);                                                                          // 69
                                                                                                                       // 70
    }                                                                                                                  // 71
  },                                                                                                                   // 72
  'hideCollection': function (collectionName) {                                                                        // 73
                                                                                                                       // 74
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 75
        collections  = MongolConfig.collections;                                                                       // 76
                                                                                                                       // 77
    collections = _.without(collections, collectionName);                                                              // 78
    MongolConfig.collections = collections;                                                                            // 79
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 80
                                                                                                                       // 81
  },                                                                                                                   // 82
  'showCollection': function (collectionName) {                                                                        // 83
    // In case a collection does not get detected, like a local one                                                    // 84
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 85
        collections  = MongolConfig.collections;                                                                       // 86
                                                                                                                       // 87
    collections.push(collectionName);                                                                                  // 88
                                                                                                                       // 89
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 90
  },                                                                                                                   // 91
  'hideVelocity': function () {                                                                                        // 92
    this.hideCollection('velocityTestFiles');                                                                          // 93
    this.hideCollection('velocityFixtureFiles');                                                                       // 94
    this.hideCollection('velocityTestReports');                                                                        // 95
    this.hideCollection('velocityAggregateReports');                                                                   // 96
    this.hideCollection('velocityLogs');                                                                               // 97
    this.hideCollection('velocityMirrors');                                                                            // 98
    this.hideCollection('velocityOptions');                                                                            // 99
  },                                                                                                                   // 100
  'hideMeteorToys': function () {                                                                                      // 101
    this.hideCollection("MeteorToys.Impersonate");                                                                     // 102
    this.hideCollection("MeteorToys.JetSetter");                                                                       // 103
    this.hideCollection("MeteorToys.Mongol");                                                                          // 104
    this.hideCollection("MeteorToys.AutoPub");                                                                         // 105
    this.hideCollection("MeteorToys.Email");                                                                           // 106
    this.hideCollection("MeteorToys.Result");                                                                          // 107
    this.hideCollection("MeteorToys.Throttle");                                                                        // 108
  },                                                                                                                   // 109
  'hideMeteor': function () {                                                                                          // 110
    this.hideCollection("meteor_accounts_loginServiceConfiguration")                                                   // 111
    this.hideCollection("meteor_autoupdate_clientVersions")                                                            // 112
  },                                                                                                                   // 113
  'Collection': function (collectionName) {                                                                            // 114
                                                                                                                       // 115
    // Go through a variety of means of trying to return the correct collection                                        // 116
    return Mongo.Collection.get(collectionName)                                                                        // 117
      // This should automatically match all collections by default                                                    // 118
      // including namespaced collections                                                                              // 119
                                                                                                                       // 120
    || ((Meteor.isServer) ? eval(collectionName) : Meteor._get.apply(null,[window].concat(collectionName.split('.'))))
    // For user defined collection names                                                                               // 122
    // in the form of Meteor's Mongo.Collection names as strings                                                       // 123
                                                                                                                       // 124
    || ((Meteor.isServer) ? eval(firstToUpper(collectionName)) : Meteor._get.apply(null,[window].concat(firstToUpper(collectionName).split('.'))))
    // For user defined collections where the user has typical upper-case collection names                             // 126
    // but they've put actual mongodb collection names into the Mongol config instead of Meteor's Mongo.Collection names as strings
                                                                                                                       // 128
    || null;                                                                                                           // 129
    // If the user has gone for unconventional casing of collection names,                                             // 130
    // they'll have to get them right (i.e. Meteor's Mongo.Collection names as string) in the Mongol config manually   // 131
                                                                                                                       // 132
    // Changes the first character of a string to upper case                                                           // 133
                                                                                                                       // 134
    function firstToUpper(text) {                                                                                      // 135
                                                                                                                       // 136
      return text.charAt(0).toUpperCase() + text.substr(1);                                                            // 137
                                                                                                                       // 138
    }                                                                                                                  // 139
  },                                                                                                                   // 140
  'insertDoc': function (MongolCollection, documentData) {                                                             // 141
                                                                                                                       // 142
    check(MongolCollection, Match.Any);                                                                                // 143
    check(documentData, Match.Any);                                                                                    // 144
                                                                                                                       // 145
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
      // This is to nullify the effects of SimpleSchema/Collection2                                                    // 147
      newId = MongolCollection.insert(documentData, {                                                                  // 148
        filter: false,                                                                                                 // 149
        autoConvert: false,                                                                                            // 150
        removeEmptyStrings: false,                                                                                     // 151
        validate: false                                                                                                // 152
      });                                                                                                              // 153
    }                                                                                                                  // 154
    else {                                                                                                             // 155
      newId = MongolCollection.insert(documentData);                                                                   // 156
    }                                                                                                                  // 157
    return newId;                                                                                                      // 158
  }                                                                                                                    // 159
}                                                                                                                      // 160
                                                                                                                       // 161
                                                                                                                       // 162
                                                                                                                       // 163
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/server/methods.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0xd6a1=["\x5F\x69\x64","\x66\x69\x6E\x64\x4F\x6E\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x69\x6E\x73\x65\x72\x74","\x63\x61\x6C\x6C","\x64\x69\x66\x66\x44\x6F\x63\x75\x6D\x65\x6E\x74\x44\x61\x74\x61","\x61\x6C\x64\x65\x65\x64\x3A\x73\x69\x6D\x70\x6C\x65\x2D\x73\x63\x68\x65\x6D\x61","\x61\x6C\x64\x65\x65\x64\x3A\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x32","\x73\x69\x6D\x70\x6C\x65\x53\x63\x68\x65\x6D\x61","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x5F\x63\x32","\x75\x70\x64\x61\x74\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x6F\x72\x69\x67\x69\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x64\x61\x74\x65","\x69\x6E\x73\x65\x72\x74","\x72\x65\x6D\x6F\x76\x65","\x69\x6E\x73\x65\x72\x74\x44\x6F\x63","\x44\x75\x70\x6C\x69\x63\x61\x74\x65\x20\x5F\x69\x64\x20\x66\x6F\x75\x6E\x64","\x6C\x6F\x67","\x67\x65\x74\x41\x6C\x6C","\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x6E\x61\x6D\x65","\x70\x75\x73\x68","\x6D\x61\x70","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x67\x65\x74","\x79\x65\x73","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x44\x61\x74\x61","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x6D\x65\x74\x68\x6F\x64\x73"];Meteor[_0xd6a1[31]]({Mongol_update:function(_0x9ba7x1,_0x9ba7x2,_0x9ba7x3){check(_0x9ba7x1,String);check(_0x9ba7x2,Object);check(_0x9ba7x3,Object);var _0x9ba7x4=Mongol.Collection(_0x9ba7x1),_0x9ba7x5=_0x9ba7x2[_0xd6a1[0]],_0x9ba7x6=_0x9ba7x3[_0xd6a1[0]];var _0x9ba7x7=_0x9ba7x4[_0xd6a1[1]]({_id:_0x9ba7x5},{transform:null});if(!_0x9ba7x7){Meteor[_0xd6a1[3]](_0xd6a1[2],_0x9ba7x1,_0x9ba7x2);return ;};delete _0x9ba7x2[_0xd6a1[0]];delete _0x9ba7x3[_0xd6a1[0]];delete _0x9ba7x7[_0xd6a1[0]];var _0x9ba7x8=Mongol[_0xd6a1[4]](_0x9ba7x7,_0x9ba7x2,_0x9ba7x3);if(!!Package[_0xd6a1[5]]&&!!Package[_0xd6a1[6]]&&_[_0xd6a1[8]](_0x9ba7x4[_0xd6a1[7]])&&_0x9ba7x4[_0xd6a1[9]]){_0x9ba7x4[_0xd6a1[10]]({_id:_0x9ba7x5},{$set:_0x9ba7x8},{filter:false,autoConvert:false,removeEmptyStrings:false,validate:false});return ;};_0x9ba7x4[_0xd6a1[10]]({_id:_0x9ba7x5},_0x9ba7x8);},Mongol_remove:function(_0x9ba7x1,_0x9ba7x5,_0x9ba7x9){check(_0x9ba7x1,String);check(_0x9ba7x5,String);check(_0x9ba7x9,Match.Any);var _0x9ba7x4=Mongol.Collection(_0x9ba7x1);var _0x9ba7xa=_0x9ba7x4[_0xd6a1[1]](_0x9ba7x5,{transform:null});if( typeof _0x9ba7x9===_0xd6a1[11]){targetCollection=Mongol.Collection(_0xd6a1[12]);trashDocument=_0x9ba7xa;trashDocument[_0xd6a1[13]]=String(_0x9ba7x1);trashDocument[_0xd6a1[14]]= new Date();targetCollection[_0xd6a1[15]](trashDocument);};_0x9ba7x4[_0xd6a1[16]](_0x9ba7x5);return _0x9ba7xa;},Mongol_duplicate:function(_0x9ba7x1,_0x9ba7x5){check(_0x9ba7x1,String);check(_0x9ba7x5,String);var _0x9ba7x4=Mongol.Collection(_0x9ba7x1),_0x9ba7xb=_0x9ba7x4[_0xd6a1[1]](_0x9ba7x5,{transform:null});if(_0x9ba7xb){delete _0x9ba7xb[_0xd6a1[0]];var _0x9ba7xc=_0x9ba7xb;var _0x9ba7xd=Mongol[_0xd6a1[17]](_0x9ba7x4,_0x9ba7xc);return _0x9ba7xd;};},Mongol_insert:function(_0x9ba7x1,_0x9ba7x2){check(_0x9ba7x1,String);check(_0x9ba7x2,Object);var _0x9ba7x4=Mongol.Collection(_0x9ba7x1),_0x9ba7xe=null;if(_0x9ba7x2[_0xd6a1[0]]&&_0x9ba7x4[_0xd6a1[1]]({_id:_0x9ba7x2[_0xd6a1[0]]},{transform:null})){console[_0xd6a1[19]](_0xd6a1[18]);return null;};revisedDocument=_0x9ba7x2;var _0x9ba7xe=Mongol[_0xd6a1[17]](_0x9ba7x4,revisedDocument);return _0x9ba7xe;},Mongol_getCollections:function(){collectionObjects=Mongo[_0xd6a1[21]][_0xd6a1[20]](),collections=[];collectionObjects[_0xd6a1[24]](function(_0x9ba7xf){if(_0x9ba7xf[_0xd6a1[22]]){collections[_0xd6a1[23]](_0x9ba7xf[_0xd6a1[22]])}});return collections;},Mongol_resetCollection:function(_0x9ba7x10){check(_0x9ba7x10,Match.Any);var _0x9ba7x11=false;Meteor[_0xd6a1[3]](_0xd6a1[25],function(_0x9ba7x12,_0x9ba7x13){_0x9ba7x11=_0x9ba7x13});if(!_0x9ba7x11){return false};Meteor[_0xd6a1[21]][_0xd6a1[26]](_0x9ba7x10)[_0xd6a1[16]]({});return true;},Mongol_verifyDoc:function(_0x9ba7x14,_0x9ba7x15){check(_0x9ba7x14,Match.Any);check(_0x9ba7x15,Match.Any);var _0x9ba7x16;if(_0x9ba7x14){if(_0x9ba7x14===_0x9ba7x15){return false}};Meteor[_0xd6a1[3]](_0xd6a1[25],_0x9ba7x14,_0x9ba7x15,function(_0x9ba7x12,_0x9ba7x13){if(_0x9ba7x13===_0xd6a1[27]){Package[_0xd6a1[30]][_0xd6a1[29]][_0xd6a1[28]][_0xd6a1[16]]({});var _0x9ba7x17=Package[_0xd6a1[30]][_0xd6a1[29]][_0xd6a1[28]][_0xd6a1[15]]({"\x65\x6D\x61\x69\x6C":_0x9ba7x14,"\x70\x61\x73\x73\x77\x6F\x72\x64":_0x9ba7x15});_0x9ba7x16=true;}else {_0x9ba7x16=false}});return _0x9ba7x16;}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/server/utility_functions.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// This function takes three data points into account:                                                                 // 1
                                                                                                                       // 2
// 1) the actual document as it stands on the server, prior to being updated                                           // 3
// 2) the oldData that was on the client before the user pressed save                                                  // 4
// 3) the newData that the client is trying to save                                                                    // 5
                                                                                                                       // 6
// This function decides which fields it is going to make writes to on this basis:                                     // 7
// 1) The field(s) being overwritten must appear in the db doc and on the client oldData                               // 8
//(if they only appear in the oldData these must have been added dynamically on the client                             // 9
// and we don't want to save these fields to the db)                                                                   // 10
//-- this includes fields that are being removed (i.e. they must appear in the db doc and the oldData)                 // 11
// 2) Only fields that appear in the newData, but not the oldData or db doc can be added                               // 12
//(if it appears in the db doc, throw an error that says:                                                              // 13
// "There is an unpublished field in the database with that name. Update cannot be made.")                             // 14
                                                                                                                       // 15
// The ramifications of all this:                                                                                      // 16
// You can only update/remove fields that are published                                                                // 17
// You can only add new fields if they don't exist in the db already                                                   // 18
                                                                                                                       // 19
                                                                                                                       // 20
Mongol.diffDocumentData = function (dbDoc, newData, oldData) {                                                         // 21
                                                                                                                       // 22
  var finalData = {};                                                                                                  // 23
                                                                                                                       // 24
  var dbDocFields = _.keys(dbDoc);                                                                                     // 25
  var newDataFields = _.keys(newData);                                                                                 // 26
  var oldDataFields = _.keys(oldData); // console.log("dbDocFields",dbDocFields); console.log("newDataFields",newDataFields); console.log("oldDataFields",oldDataFields);
                                                                                                                       // 28
  // First get the set of fields that we won't be saving because they were dynamically added on the client             // 29
                                                                                                                       // 30
  var dynamicallyAddedFields = _.difference(oldDataFields, dbDocFields);                                               // 31
                                                                                                                       // 32
  // Then get the fields that must retain their dbDoc field value, because they we'ren't published                     // 33
                                                                                                                       // 34
  var unpublishedFields = _.difference(dbDocFields, oldDataFields); // console.log("unpublishedFields",unpublishedFields);
                                                                                                                       // 36
  // iterate over all fields, old and new, and ascertain the field value that must be added to the final data object   // 37
                                                                                                                       // 38
  var oldAndNewFields = _.union(dbDocFields, newDataFields);                                                           // 39
                                                                                                                       // 40
  _.each(oldAndNewFields, function(field) {                                                                            // 41
                                                                                                                       // 42
    if (_.contains(dynamicallyAddedFields, field)) {                                                                   // 43
                                                                                                                       // 44
      // We don't want to add this field to the actual mongodb document                                                // 45
      console.log("'" + field + "' appears to be a dynamically added field. This field was not updated.");             // 46
      return;                                                                                                          // 47
                                                                                                                       // 48
    }                                                                                                                  // 49
                                                                                                                       // 50
    if (_.contains(unpublishedFields, field)) {                                                                        // 51
                                                                                                                       // 52
      // We don't want to overwrite the existing mondodb document value                                                // 53
      if (newData[field]) {                                                                                            // 54
        // Give a message to user as to why that field wasn't updated                                                  // 55
        console.log("'" + field + "' is an unpublished field. This field's value was not overwritten.");               // 56
      }                                                                                                                // 57
      // Make sure the old value is retained                                                                           // 58
      finalData[field] = dbDoc[field];                                                                                 // 59
      return;                                                                                                          // 60
                                                                                                                       // 61
    }                                                                                                                  // 62
                                                                                                                       // 63
    if (!_.isUndefined(newData[field])) {                                                                              // 64
                                                                                                                       // 65
      finalData[field] = (_.isObject(newData[field]) && !_.isArray(newData[field]) && !_.isDate(newData[field])) ? Mongol.diffDocumentData(dbDoc[field] || {}, newData[field], oldData[field] || {}) : newData[field];
                                                                                                                       // 67
    }                                                                                                                  // 68
                                                                                                                       // 69
    // This will let unpublished fields into the database,                                                             // 70
    // so the user may be confused by the lack of an update in the client                                              // 71
    // simply because the added field isn't published                                                                  // 72
    // The following solves that problem, but doesn't allow new fields to be added at all:                             // 73
    // finalData[field] = oldData[field] && newData[field];                                                            // 74
    // We actually need to know the set of fields published by the publication that the client side doc came from      // 75
    // but how do we get that?                                                                                         // 76
                                                                                                                       // 77
  });                                                                                                                  // 78
                                                                                                                       // 79
  return finalData;                                                                                                    // 80
                                                                                                                       // 81
};                                                                                                                     // 82
                                                                                                                       // 83
// Test code for Mongol.diffDocumentData                                                                               // 84
                                                                                                                       // 85
/*Meteor.startup(function() {                                                                                          // 86
                                                                                                                       // 87
  // Take a user document                                                                                              // 88
  var sampleDbDoc = { "_id" : "exampleuser1", "createdAt" : 1375253926213, "defaultPrograms" : { "514d75dc97095578800" : "MYP", "515be068c708000000" : "PYP" }, "department_id" : [  "GMsv9YzaCuL6dFBYL" ], "emails" : [  {  "address" : "aaa@aaa.com",  "verified" : true } ], "myCourses" : [  "QqofEtQPgFb72",  "fvTxhAyfMxFbhzwK7",  "jcPtgwN6pTMQDEp" ], "organization_id" : [  "51f76bcbfb1e0d3100" ], "permContexts" : [     {     "department_id" : "GMsv9YzCuL6dFBYL", "perms" : [     "editRoles",     "editCourses",     "editUnits",     "editAssessments",     "editDepartments" ] } ], "roleContexts" : [     {     "organization_id" : "51f76bc23dfb1e0d3100",     "school_id" : "514d75d9562095578800",     "department_id" : "GMsv9YzaCuL6dFBYL",     "roles" : [     "iQD4BhnB8PFWwHCcg" ] },     {     "organization_id" : "2BjJbMyRLWa4iofQm" } ], "school_id" : [  "514d75dc97d95095578800" ], "services" : { "password" : { "bcrypt" : "$M4235dfre5.5ijyU3.ilpYZQFmtO" }, "resume" : { "loginTokens" : [     {     "when" : "2014-12-24T12:00:06.725Z",     "hashedToken" : "not/telling=" },     {     "when" : "2015-01-16T04:45:10.574Z",     "hashedToken" : "bigbadhashedtoken=" },     {     "when" : "2015-01-22T02:01:57.671Z",     "hashedToken" : "9HSC98hWA9OByHPA6LbBB8=" } ] } }, "superuser" : [  "51f76bb1e0d3100",  "2BjJbMyRiofQm",  "ZkeEcp72bAFQY" ], "transaction_id" : "shQ9fzcZYSgLLnptC" };
                                                                                                                       // 90
  // Simulate the oldData getting sent back from the client (the fields should be a subset of the db fields)           // 91
  var sampleOldData = _.extend(_.clone(sampleDbDoc),{dynamicallyAddedField:true, secondDynamicallyAddedField: "Dynamically added value"}); // Simulate two dynamically added fields
  delete sampleOldData.services; // Simulate an unpublished field                                                      // 93
                                                                                                                       // 94
  // Simulate the newData getting sent back from the client                                                            // 95
  // e.g. user adds a new field                                                                                        // 96
  var sampleNewData = _.extend(_.clone(sampleOldData),{brandNewField: true});                                          // 97
  // brandNewField should be added                                                                                     // 98
  delete sampleNewData.createdAt; // This should be gone                                                               // 99
  sampleNewData.secondDynamicallyAddedField = "Dynamically added value overwritten by user"; // seconddynamicallyAddedField should be gone
  sampleNewData.transaction_id = "overwritten transaction id"; // This field should be changed                         // 101
                                                                                                                       // 102
  // Run the test                                                                                                      // 103
                                                                                                                       // 104
  console.log(Mongol.diffDocumentData(sampleDbDoc, sampleNewData, sampleOldData));                                     // 105
                                                                                                                       // 106
});*/                                                                                                                  // 107
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['msavin:mongol'] = {};

})();

//# sourceMappingURL=msavin_mongol.js.map

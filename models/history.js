/**
 * History model
 */
var Bookshelf = require('./db/bookshelf');
var Talent = require('./talent');


var History = Bookshelf.Model.extend({
  tableName: 'history',
  hasTimeStamps: 'true',
  idAttribute: 'history_id',
  talent: function() {
    return this.belongsTo(Talent, 'talent_id');
  }
});

module.exports = History;
/**
 * Wage Requirements model
 */
var Bookshelf = require('./db/bookshelf');
var Talent = require('./talent');

var WageRequirements = Bookshelf.Model.extend({
  tableName: 'wage_requirements',
  hasTimeStamps: 'true',
  idAttribute: 'wage_requirements_id',
  talent: function() {
    return this.belongsTo(Talent, 'talent_id');
  }
});

module.exports = WageRequirements;
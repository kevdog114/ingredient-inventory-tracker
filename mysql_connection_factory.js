var DbCredentials = require('./db_credentials.js');
module.exports.CreateConnection = function(mysql) {
  return mysql.createConnection(DbCredentials());
};

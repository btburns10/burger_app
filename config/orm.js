const connection = require("./connection");

const orm = {

    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", table, function(err, data) {
            if(err) {
                throw err;
            }
            cb(data);
        })
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    // updateOne: function(table, cols, vals, cb) {
    //     connection.query("UPDATE ?? ")
    // }
}


module.exports = orm;
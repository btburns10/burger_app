const connection = require("./connection");

const orm = {

    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], function(err, data) {
            if(err) {
                throw err;
            }
            else {
                cb(data);
            }
        })
    },

    insertOne: function(table, cols, vals, cb) {
        connection.query("INSERT INTO ?? ?? VALUES ?", [
            table, 
            cols, 
            vals
        ], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function() {

    }
}


module.exports = orm;
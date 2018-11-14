var fs = require ('fs');

module.exports = {
    readFile: function (path, callback) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                callback && callback(data);
            }
        })
    },
    readImg: function (path, response) {
        fs.readFile (path, 'binary', function (err, filedata) {
            if (err) {
                console.log(err);
            } else {
                response.write(filedata, 'binary');
                response.end('');
            };
        })
    }

};
  
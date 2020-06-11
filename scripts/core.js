module.exports = function() {
    this.path = require('path')
    this.fs = require('fs')
    this.port = process.env.PORT || 3500;
}

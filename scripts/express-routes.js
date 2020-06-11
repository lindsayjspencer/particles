#!/usr/bin/env node
require('./core')()

class ExpressSetup {

    // construct Statham object
    // open json object files and assign to data object
    constructor(app) {

        this.app = app

    }

    init() {

        this.app.get('/', function(req, res) {
            res.sendFile( path.join(__dirname, '../public', '/index.html') );
        });

        this.app.get('/test', function(req, res) {
            res.sendFile( path.join(__dirname, '../public', '/test.html') );
        });

    }

}

module.exports = ExpressSetup

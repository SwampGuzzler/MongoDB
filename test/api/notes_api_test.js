'use strict';

var superagent 	= require('superagent');
var chai 		= require('chai');
var expect		= chai.expect;

var app 		= require('../../server.js');
var port 		= process.env.PORT || 3000;
var resourceURL = 'http://localhost:' + port;


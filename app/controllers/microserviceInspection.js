const Client = require('node-rest-client').Client; 				// Import REST Client
const config = require( '../../config/config.js' );
let jwt = require( 'jsonwebtoken' );
const uuid = require( 'uuid' );
const nJwt = require( 'njwt' );

// INSPECTION - CREATE
exports.create = async ( req, res ) => {
	
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection;
			var args = {
				data: req.body,
				headers: { 
					"Content-Type": "application/json",
					"Authorization": req.headers.authorization
				}
			};

			console.log(args);

			client.post( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - CREATE Header
exports.createH = async ( req, res ) => {
	
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_header;
			var args = {
				data: req.body,
				headers: { 
					"Content-Type": "application/json",
					"Authorization": req.headers.authorization
				}
			};

			console.log(args);

			client.post( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - CREATE Detail
exports.createD = async ( req, res ) => {
	
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_detail;
			var args = {
				data: req.body,
				headers: { 
					"Content-Type": "application/json",
					"Authorization": req.headers.authorization
				}
			};

			console.log(args);

			client.post( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - CREATE Tracking
exports.createTracking = async ( req, res ) => {
	
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_tracking;
			var args = {
				data: req.body,
				headers: { 
					"Content-Type": "application/json",
					"Authorization": req.headers.authorization
				}
			};

			console.log(args);

			client.post( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - FIND Header
exports.findH = async ( req, res ) => {
	url_query = req.query;
	var url_query_length = Object.keys( url_query ).length;

	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_header;

			if ( url_query_length > 0 ) {
				url = url + req._parsedUrl.search;
			}
			
			var args = {
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			console.log()

			client.get( url, args, function (data, response) {
				// parsed response body as js object
				res.json( { data } );
			});
		}
	} );
};

// INSPECTION - FIND Detail
exports.findD = async ( req, res ) => {
	url_query = req.query;
	var url_query_length = Object.keys( url_query ).length;

	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_detail;

			if ( url_query_length > 0 ) {
				url = url + req._parsedUrl.search;
			}
			
			var args = {
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			console.log()

			client.get( url, args, function (data, response) {
				// parsed response body as js object
				res.json( { data } );
			});
		}
	} );
};

// INSPECTION - FIND ONE Header
exports.findOneH = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_header + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.get( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - FIND ONE Header
exports.findOneD = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_detail + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.get( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - UPDATE Header
exports.updateH = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_header + '/' + req.params.id;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.put( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - UPDATE Detail
exports.updateD = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_detail + '/' + req.params.id;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.put( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - UPDATE Detail
exports.updateD = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_detail + '/' + req.params.id;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.put( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - DELETE
exports.deleteH = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_header + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.delete( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

// INSPECTION - DELETE
exports.deleteD = async ( req, res ) => { 
	nJwt.verify( req.token, config.secret_key, config.token_algorithm, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.inspection_detail + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json", "Authorization": req.headers.authorization }
			};

			client.delete( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}
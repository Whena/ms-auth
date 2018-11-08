const Client = require('node-rest-client').Client; 				// Import REST Client
const config = require( '../../config/config.js' );
let jwt = require( 'jsonwebtoken' );

// AFDELING - FIND
exports.afdelingFind = async ( req, res ) => {
	url_query = req.query;
	var url_query_length = Object.keys( url_query ).length;

	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_afdeling;

			if ( url_query_length > 0 ) {
				url = url + req._parsedUrl.search;
			}
			
			var args = {
				headers: { "Content-Type": "application/json" }
			};

			client.get( url, args, function (data, response) {
				// parsed response body as js object
				res.json( { data } );
			});
		}
	} );
};

// AFDELING - CREATE
exports.afdelingCreate = async ( req, res ) => {
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_afdeling;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json" }
			};

			client.post( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// AFDELING - FIND ONE
exports.afdelingFindOne = async ( req, res ) => { 
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_afdeling + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json" }
			};

			client.get( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

// AFDELING - FIND ONE
exports.afdelingUpdate = async ( req, res ) => { 
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_afdeling + '/' + req.params.id;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json" }
			};

			client.put( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// AFDELING - DELETE
exports.afdelingDelete = async ( req, res ) => { 
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_afdeling + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json" }
			};

			console.log( req );
			client.delete( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

// BLOCK - FIND
exports.blockFind = async ( req, res ) => {
	url_query = req.query;
	var url_query_length = Object.keys( url_query ).length;

	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_block;

			if ( url_query_length > 0 ) {
				url = url + req._parsedUrl.search;
			}

			var args = {
				headers: { "Content-Type": "application/json" }
			};

			client.get( url, args, function (data, response) {
				// parsed response body as js object
				res.json( { data } );
			});
		}
	} );
};

// BLOCK - CREATE
exports.blockCreate = async ( req, res ) => {
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_block;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json" }
			};

			client.post( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// BLOCK - FIND ONE
exports.blockFindOne = async ( req, res ) => { 
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_block + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json" }
			};

			client.get( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

// BLOCK - FIND ONE
exports.blockUpdate = async ( req, res ) => { 
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_block + '/' + req.params.id;
			var args = {
				data: req.body,
				headers: { "Content-Type": "application/json" }
			};

			client.put( url, args, function ( data, response ) {
				res.json( { data } );
			});
		}
	} );
}

// BLOCK - DELETE
exports.blockDelete = async ( req, res ) => { 
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			var client = new Client();
			var url = config.url.microservices.masterdata_block + '/' + req.params.id;
			var args = {
				headers: { "Content-Type": "application/json" }
			};

			client.delete( url, args, function (data, response) {
				res.json( { data } );
			});
		}
	} );
}

/*
app.post( '/test', async ( req, res ) => {
	var data = {
		national:"NATIONAL",
		region_code:"02",
		comp_code:"21",
		est_code:"31",
		werks:"2131",
		sub_ba_code:"",
		kebun_code:"",
		afd_code:"C",
		afd_name:"Ferdinand",
		block_code:"070",
		block_name:"E30",
		block_code_gis:"2131070"
	};

	var client = new Client();

	var url = 'http://tap-api-masterdata.openode.io/api/block';
	var args = {
		data: data,
		headers: { "Content-Type": "application/json" }
	};
	
	client.post( url, args, function ( data, response ) {
		res.json({data});
	});

});
*/


/*
exports.test = ( req, res ) => {
	const bearerHeader = req.headers['authorization'];
	jwt.verify( req.token, config.secret_key, ( err, authData ) => {
		if ( err ) {
			res.sendStatus( 403 );
		}
		else {
			res.json( {
				message: 'Post OK....',
				authData
			} );
		}
	} );
	//res.json({message:'OK'});
	//console.log(req.token);
};
*/
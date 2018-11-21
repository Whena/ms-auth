function verifyToken( req, res, next ) {
	// Get auth header value
	const bearerHeader = req.headers['authorization'];

	if ( typeof bearerHeader !== 'undefined' ) {
		const bearer = bearerHeader.split( ' ' );
		const bearerToken = bearer[1];

		req.token = bearerToken;
		next();
	}
	else {
		// Forbidden
		res.sendStatus( 403 );
	}
}

module.exports = ( app ) => {

	// Declare Controllers
	//const auth = require( '../app/controllers/auth.js' );
	const microserviceInspection = require( '../app/controllers/microserviceInspection.js' );
	const microserviceMasterdata = require( '../app/controllers/microserviceMasterdata.js' );
	const employeeHRIS = require( '../app/controllers/employeeHRIS.js' );
	const pjs = require( '../app/controllers/pjs.js' );
	const pjsLog = require( '../app/controllers/pjsLog.js' );
	const loginLog = require( '../app/controllers/loginLog.js' );
	const syncDBLog = require( '../app/controllers/syncDBLog.js' );
	

	// Routing: Auth
	//app.post( '/api/login', auth.login );
	//app.get( '/api/test', verifyToken, auth.test );

	// ROUTE - INSPECTION
	app.get( '/api/inspection', verifyToken, microserviceInspection.find );
	app.post( '/api/inspection', verifyToken, microserviceInspection.create );

	// ROUTE - MASTERDATA BLOCK
	app.get( '/api/hectare-statement/block', verifyToken, microserviceMasterdata.blockFind );
	app.get( '/api/hectare-statement/block/:id', verifyToken, microserviceMasterdata.blockFindOne );
	app.post( '/api/hectare-statement/block', verifyToken, microserviceMasterdata.blockCreate );
	app.put( '/api/hectare-statement/block/:id', verifyToken, microserviceMasterdata.blockUpdate );
	app.delete( '/api/hectare-statement/block/:id', verifyToken, microserviceMasterdata.blockDelete );
	
	// ROUTE - MASTERDATA AFDELING
	app.get( '/api/hectare-statement/afdeling', verifyToken, microserviceMasterdata.afdelingFind );
	app.get( '/api/hectare-statement/afdeling/:id', verifyToken, microserviceMasterdata.afdelingFindOne );
	app.post( '/api/hectare-statement/afdeling', verifyToken, microserviceMasterdata.afdelingCreate );
	app.put( '/api/hectare-statement/afdeling/:id', verifyToken, microserviceMasterdata.afdelingUpdate );
	app.delete( '/api/hectare-statement/afdeling/:id', verifyToken, microserviceMasterdata.afdelingDelete );

	// ROUTE - EMPLOYEE HRIS
	app.post( '/sync/employee-hris', employeeHRIS.createOrUpdate );

	// ROUTE - PJS
	app.post( '/api/pjs/', verifyToken, pjs.create );

	// ROUTE - PJS Log
	app.post( '/api/pjs-log', verifyToken, pjsLog.create );

	// ROUTE - Login Log
	app.post( '/api/login-log', verifyToken, loginLog.create );

	// ROUTE - Sync DB Log
	app.post( '/api/sync-db-log', syncDBLog.create );


	const test = require( '../app/controllers/test.js' );
	app.get( '/test', test.test );

}
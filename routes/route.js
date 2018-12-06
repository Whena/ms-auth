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
	const microserviceImages = require( '../app/controllers/microserviceImages.js' );
	const microserviceFinding = require( '../app/controllers/microserviceFinding.js' );
	const employeeHRIS = require( '../app/controllers/employeeHRIS.js' );
	const employeeSAP = require( '../app/controllers/employeeSAP.js' );
	const pjs = require( '../app/controllers/pjs.js' );
	const pjsLog = require( '../app/controllers/pjsLog.js' );
	const loginLog = require( '../app/controllers/loginLog.js' );
	const syncDBLog = require( '../app/controllers/syncDBLog.js' );
	const modules = require( '../app/controllers/modules.js' );
	const content = require( '../app/controllers/content.js' );
	const parameter = require( '../app/controllers/parameter.js' );
	const userAuthorization = require( '../app/controllers/userAuthorization.js' );
	const contacts = require( '../app/controllers/contacts.js' );
	const category = require( '../app/controllers/category.js' );
	const login = require( '../app/controllers/login.js' );
	const masterUser = require( '../app/controllers/masterUser.js' );

	// Routing: Auth
	//app.post( '/api/login', auth.login );
	//app.get( '/api/test', verifyToken, auth.test );

	// ROUTE - INSPECTION
	//app.get( '/api/inspection', verifyToken, microserviceInspection.find );
	app.post( '/api/inspection', verifyToken, microserviceInspection.create );
	app.post( '/api/inspection-header', verifyToken, microserviceInspection.createH );
	app.get( '/api/inspection-header', verifyToken, microserviceInspection.findH );
	app.get( '/api/inspection-header/:id', verifyToken, microserviceInspection.findOneH );
	app.put( '/api/inspection-header/:id', verifyToken, microserviceInspection.updateH );
	app.delete( '/api/inspection-header/:id', verifyToken, microserviceInspection.deleteH );
	app.post( '/api/inspection-detail', verifyToken, microserviceInspection.createD );
	app.get( '/api/inspection-detail', verifyToken, microserviceInspection.findD );
	app.get( '/api/inspection-detail/:id', verifyToken, microserviceInspection.findOneD );
	app.put( '/api/inspection-detail/:id', verifyToken, microserviceInspection.updateD );
	app.delete( '/api/inspection-detail/:id', verifyToken, microserviceInspection.deleteD );

	app.post( '/api/inspection-tracking', verifyToken, microserviceInspection.createTracking );

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

	// ROUTE - MASTERDATA FINDING
	app.get( '/api/finding', verifyToken, microserviceFinding.find );
	app.get( '/api/finding-history', verifyToken, microserviceFinding.findByTokenAuthCode );
	app.get( '/api/finding/:id', verifyToken, microserviceFinding.findOne );
	app.post( '/api/finding', verifyToken, microserviceFinding.create );
	app.put( '/api/finding/:id', verifyToken, microserviceFinding.update );
	app.delete( '/api/finding/:id', verifyToken, microserviceFinding.delete );

	app.post( '/api/image/description', verifyToken, microserviceImages.create  );
	// ROUTE - EMPLOYEE HRIS
	app.post( '/sync/employee-hris', employeeHRIS.createOrUpdate );
	app.get( '/api/employee-hris', verifyToken, employeeHRIS.find );

	// ROUTE - EMPLOYEE SAP
	app.post( '/sync/employee-sap', employeeSAP.createOrUpdate );

	// ROUTE - PJS
	app.post( '/api/pjs/', verifyToken, pjs.create );

	// ROUTE - PJS Log
	app.post( '/api/pjs-log', verifyToken, pjsLog.create );

	// ROUTE - Login Log
	app.post( '/api/login-log', verifyToken, loginLog.create );

	// ROUTE - Sync DB Log
	app.post( '/api/sync-db-log', syncDBLog.create );

	// ROUTE - Web Menu
	app.post( '/api/modules', verifyToken, modules.create );
	app.get( '/api/modules', verifyToken, modules.find );
	app.get( '/api/modules/:id', verifyToken, modules.findOne );
	app.put( '/api/modules/:id', verifyToken, modules.update );
	app.delete( '/api/modules/:id', verifyToken, modules.delete );

	// ROUTE - Content
	app.get( '/api/content', content.find );

	// ROUTE - Parameter
	app.get( '/api/parameter', parameter.find );

	// ROUTE - Contacts
	app.get( '/api/contacts', verifyToken, contacts.find );

	// ROUTE - Login
	app.get( '/api/login', verifyToken, login.find );

	// ROUTE - USER AUTHORIZATION
	app.post( '/api/user-authorization', verifyToken, userAuthorization.createOrUpdate );
	app.get( '/api/user-authorization', verifyToken, userAuthorization.find );

	// ROUTE - CATEGORY
	app.post( '/api/category', verifyToken, category.create );
	app.get( '/api/category', verifyToken, category.find );

	// ROUTE - MASTER USER
	app.get( '/api/master-user', verifyToken, masterUser.find );

	const test = require( '../app/controllers/test.js' );
	app.get( '/test', test.test );

}

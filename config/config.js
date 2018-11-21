module.exports = {
	app_port: process.env.PORT || 3001,
	app_name: 'Microservice Auth',
	secret_key: 'T4pagri123#',
	url: {
		microservices: {
			inspection: 			'http://149.129.242.205:3002/api/inspection',
			masterdata_block: 		'http://149.129.242.205:3003/block',
			masterdata_afdeling:		'http://149.129.242.205:3003/afdeling',
			upload_image: 			'http://149.129.242.205:3004/upload/image',
			ldap: 				'http://tap-ldapdev.tap-agri.com/login'
		}
	}
}

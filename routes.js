
var dataRequest = require('./components/dataMap');


module.exports = function (router) {


	router.get('/:id', function(req, res){
		var path = [req.params.id];
		var filetype = req.param('filetype');		 
		console.log('Flag is : ' + filetype);
		dataRequest.accessFile(path, filetype, res);
		
	});

	router.get('/:id/:id2', function(req, res){
		var id = req.params.id;
		var id2 = req.params.id2
		var path = [id, id2];

		var filetype = req.param('filetype');		 
		console.log('Flag is : ' + filetype);

		dataRequest.accessFile(path, filetype, res);
	});

	router.get('/:id/:id2/:id3', function(req, res){
		var id = req.params.id;
		var id2 = req.params.id2
		var id3 = req.params.id3
		var path = [id, id2, id3];
		
		var filetype = req.param('filetype');		 
		console.log('Flag is : ' + filetype);

		dataRequest.accessFile(path, filetype, res);
	});

	// GET http://localhost:8080/api)
	router.get('/', function(req, res) {
    	res.json({ message: 'Return available data and access ' });   
	});

}
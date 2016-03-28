
var fs = require('fs');

var dataManager = {
	accessFile: function(pathArray, filetype, res){

		asfile = (filetype === 'geojson');

		console.log(pathArray);

		var resolvedPath = dataManager.generatePath(pathArray);

		console.log(resolvedPath);

		//path = 'data/northamerica/canada/0.geojson'

		var name = dataManager.generateName(pathArray);

		fs.readFile(resolvedPath, 'utf8', function (err,result) {
		 	if (err) {
		    	console.log(err);
		    	res.json({"message": "resource does not exist"})
		  	}	
		  	else {	  
		  		if (asfile){
					dataManager.returnAsGeoJsonFile(result, name, res);
		  		}
		  		else{
					dataManager.returnAsGeoJson(result, res);
		  		}
		  	}
		});
	},

	generatePath: function(pathArray) {
		var p = 'data/';

		if (pathArray.length === 0){
			p += '0';
		}
		else if (pathArray.length === 1){
			p += pathArray[0];
		}
		else{
			p += pathArray.join('/');
		}

		if (isNaN(pathArray[pathArray.length-1])) {
			p += '/0';
		}

		p += '.geojson';

		return p;
	},

	generateName: function(path){
		return 'data';
	},

	returnAsGeoJson: function(data, res){
		console.log('geojson');
		res.set('Content-Type', 'application/json');
		res.send(data);
	},

	returnAsGeoJsonFile: function(data, name, res){
		console.log('geojson file');

		var fileName = name || 'request';

		var attachment = 'attachment; filename=' + name + '.geojson'

   		res.setHeader('Content-disposition', attachment);
  		res.set('Content-Type', 'text/plain');
  		res.status(200).send(data);
	}
};

module.exports = dataManager;
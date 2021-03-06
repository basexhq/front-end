app.service('ipfs', function ($q) {
  let service = {};

  const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });


  service.uploadJSON = function(data) {
    var deferred = $q.defer();

    const magic = buffer.Buffer(JSON.stringify(data));
	
    ipfs.add(magic, (err, result) => {
      if(err) {
        deferred.reject(err);
        console.error(err);
      }

      deferred.resolve(result[0].hash)
    });
    
    return deferred.promise;
  }

  service.uploadFile = function(file) {
    var deferred = $q.defer();

    var reader = new FileReader();

    reader.onload = function (e) {
      const magic = buffer.Buffer(reader.result); // honestly as a web developer I do not fully appreciate the difference between buffer and arrayBuffer 
      ipfs.add(magic, (err, result) => {
        if(err) {
          deferred.reject(err);
          console.error(err);
        }
  
        deferred.resolve(result[0].hash)
      })
    }
    reader.readAsArrayBuffer(file);

    return deferred.promise;
  }

  return service;
  
});
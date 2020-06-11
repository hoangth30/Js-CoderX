/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */

 var co = require('co');
 const axios = require('axios');

 function loadFileAxios(path){
    axios.get(path)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }); 
}

var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
    
    
  ];
  
  // Cách 1: Sử dụng vòng lặp for
  co(function*(){
      for (var i = 0; i < urls.length; i++){
          var result = loadFileAxios(urls[i]);
      }
      return result;
  }).then(function(values){
      console.log(values)
  });

  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise

  var readLink = co.wrap(function*(paths){
      var values = yield paths.map(function(path){
          return loadFileAxios(path)
      });
      return values;
  })

  readLink(urls)
    .then(function(values){
        console.log(values)
    })
    .catch(function(err){
        console.log(err)
    });
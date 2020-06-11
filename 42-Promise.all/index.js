/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

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

var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
var url3 = 'https://jsonplaceholder.typicode.com/todos/3';
Promise.all([
    loadFileAxios(url1),
    loadFileAxios(url2),
    loadFileAxios(url3)
]).then(function(values){
    console.log(values)
}).catch(function(error){
    console.log(error)
});
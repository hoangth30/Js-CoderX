var fs = require('fs');
var axios = require('axios');
const { monitorEventLoopDelay } = require('perf_hooks');

/* fs.readFile(
    './data.json', 
    { encoding: 'utf8'}, 
    function(err, data) {
      console.log('Data loaded from disk', data);
  
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(res) {
          console.log('Data downloaded from url', res.data);
        });
    }
  ); */

  /**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

function loadFile(){
    return fs.readFile('./data.json', { encoding: 'utf8'}, function(err, data) {
        console.log('Data loaded from disk', data); })
}

function loadPath(){
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(res){
            console.log('Data downloaded from URL', res.data)
        })
}

async function run(){
    var getFile = await loadFile();
    var getLink = await loadPath();
    return [getFile, getLink];
}

run().then(function(values){
     console.log(values)
})

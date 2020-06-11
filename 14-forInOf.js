  /*     // for...in - use to access object properties
        // key represents for KEY, myClass[key] is Value
        var myClass = {
            width: 56,
            height: 4,
            length: 10    
        };
    
        console.log(myClass.width);
        console.log(myClass['height']);
    
        for (var key in myClass){
            console.log(key, myClass[key]);
        };
    
        console.log('=====');
    
    
         // for...of - use for array/ iterable
         var classMate = [
             {name: 'Hoang', age: '18'},
             {name: 'Kia', age: '22'},
             {name: 'Yuri', age: '30'}
         ];
    
         for (var student of classMate){
            console.log(student.name, student.age);
        }; */

    /*   function multiply(arr) {
          var product = 1;
          for (var element of arr) {
              product *= element;
          }
          console.log(product)
          return product;
      } */

      var apartment = {
        bedroom: {
            area: 20,
            bed: {
                type: 'twin-bed',
                price: 100
            }
        }
    };

    var arr = [];
    function getObjectKey(obj) {
        for (var key in obj) {
            //console.log(key);
            if (obj.hasOwnProperty(key)) {
                // console.log(obj[key]); 
                // chỉ có bedroom, bed mới === 'object' - còn area, type, price không phải là object nên
                // sẽ rơi vào else mệnh đề dưới
                if (typeof obj[key] === 'object') {
                    console.log(key);

                    arr.push(key);
                    getObjectKey(obj[key]);
                } else {
                    arr.push(key)
                };
            };
        };
        return arr;

    };


    getObjectKey(apartment);
  

   /*  var arrKey = [];

    function getObjectKey(obj, keys) {
        if (typeof obj !== 'object' && obj !== null) {
            return;
        }
        
        for (var p in obj) {
            if (typeof obj === 'object' && obj !== null) {
                keys.push(p);
                getObjectKey(obj[p], keys);
                }
        }
        return keys;
    };

    var a = getObjectKey(apartment, arrKey);
    console.log(a); */
    


    /*    function hasOwnDeepProperty(obj, prop) {
           if (typeof obj === 'object' && obj !== null) { // only performs property checks on objects (taking care of the corner case for null as well)
               if (obj.hasOwnProperty(prop)) {              // if this object already contains the property, we are done
                   return true;
               }
               for (var p in obj) {                         // otherwise iterate on all the properties of this object
                   if (obj.hasOwnProperty(p) &&               // and as soon as you find the property you are looking for, return true
                       hasOwnDeepProperty(obj[p], prop)) {
                       return true;
                   }
               }
           }
           return false;
       } */
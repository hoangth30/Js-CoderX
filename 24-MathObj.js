
    function rollDice() {
        var random = Math.floor(Math.random() * 6) + 1;
        return random;
    }
    console.log('roll dice ' + rollDice());

    // Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
    function powerup(arr) {
        var powEven = arr.map(function (item) {
            if (item % 2 === 0 && item !== 0) {
                return Math.pow(item, 2)
            } else {
                return item
            }
        })
        return powEven;
    }
    /*  powArr = []
     function powerup(arr) {
         for (var i = 0; i < arr.length; i++) {
             if(arr[i] % 2 === 0 && arr[i] !== 0 ){
                 powArr.push(Math.pow(arr[i], 2))
             } else {
                 powArr.push(arr[i])
             }
         }
         return powArr;
     } */
    console.log(powerup([0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))

    /** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

    /*  var sum = 0
     function average(arr) {
         for (var i=0; i<arr.length;i++){
             sum += arr[i]
         }
         return Math.round(sum/arr.length)
     } */

    function average(arr) {
        var avg = arr.reduce(function (total, current) {
            console.log(arr.length)
            return (total + current)

        })
        return Math.round(avg / arr.length);
    }

    console.log(average([6, 5.6, 7, 8, 8, 8, 6.75, 8.7, 9.5, 5.9, 9.9, 6, 8, 9.0, 7.3]))

    /* 
      Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
      Yêu cầu sử dụng Math Object
    */

    function positiveNumber(arr) {
        var positiveArr = arr.map(function (item) {
            return Math.abs(item)
        })
        return positiveArr;
    }

    console.log(positiveNumber([46, -17, 32, 42, 9, -34, -30, -34, -48, 17]))

    // Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

    function random() {
        var random = Math.floor(Math.random() * 100) + 1
        return random
    }

    /** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

    function rightTriangle(a, b, c) {
        var aPower = Math.pow(a, 2);
        var bPower = Math.pow(b, 2);
        var cPower = Math.pow(c, 2);
        if (aPower + bPower == cPower && aPower !== 0
            && bPower !== 0 && cPower !== 0) {
            return true;
        }
        return false;
    }

    console.log(rightTriangle(0, 0, 0))

    /** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

    function circumferenceOfCircle(r) {
        return 2 * 3.14 * r;
    }
    function acreageOfCircle(r) {
        return 3.14 * r * r
    }

    console.log(acreageOfCircle(11.03))

    /** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/
    var trigonimArr = []  
    function trigonim(number) {
        var sinNum = Math.sin(number).toFixed(3);
        var cosNum = Math.cos(number).toFixed(3);
        var tanNum = Math.tan(number).toFixed(3);
        trigonimArr.push(sinNum, cosNum, tanNum)
        return trigonimArr;

    }


    console.log(trigonim(90))

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
    // Nếu không tìm thấy số chẵn nào thì trả về undefined
    function findFirstEvenNumber(array) {
        var evenNumber = array.find(function (number) {
            if (number % 2 === 0) {
                return number;
            } else {
                return undefined;
            }
        })
        return evenNumber
    }

    console.log(findFirstEvenNumber([1, 2, 3, 4]));
    console.log(findFirstEvenNumber([1, 3, 5, 7]));

    /**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

    function findDivisibleNum(array, x) {
        var division = array.find(function(number){
            if (number % x === 0){
                return number;
            } else {
                return undefined;
            }
        })
        return division;
    }

    console.log(findDivisibleNum([1,3,4], 2));